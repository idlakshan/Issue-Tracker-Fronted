import { useState } from "react";
import { Dropdown } from "../components/ui/dropdown";
import { ISSUE_STATUS, ISSUE_PRIORITY } from "../constants/app-constants";
import Table from "../components/ui/table";
import Input from "../components/ui/input";
import { Search } from "lucide-react";
import { useGetAllUsersQuery } from "../redux/api/auth-api";
import {
  useDeleteIssueMutation,
  useGetIssuesQuery,
} from "../redux/api/issue-api";
import IssueModel from "./issue-model";
import { toast } from "react-toastify";
import IssueDetailsModal from "./issue-details-modal";
import Swal from "sweetalert2";

const AllIssues = () => {
  const { data: users } = useGetAllUsersQuery();

  const [status, setStatus] = useState("ALL");
  const [priority, setPriority] = useState("ALL");
  const [assignee, setAssignee] = useState("ALL");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const [deleteIssue] = useDeleteIssueMutation();
  const filteredUsers =
    users?.data?.filter((user) => user.role !== "ADMIN") || [];

  const assigneeOptions = [
    {
      label: "All Assignees",
      value: "All",
    },
    ...filteredUsers.map((user) => ({
      label: `${user.firstName} ${user.lastName}`,
      value: user._id,
    })),
  ];

  const { data } = useGetIssuesQuery({
    page,
    limit: 7,
    ...(status !== "All" && { status }),
    ...(priority !== "All" && { priority }),
    ...(assignee !== "All" && { assignee }),
    ...(search.trim() && { search }),
  });

  //console.log(data);

  const issues = data?.data?.issues || [];
  const totalPages = data?.data?.totalPages || 0;
  //console.log(totalPages);

  const handleEdit = (issue) => {
    setSelectedIssue(issue);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
         title: "Delete Issue",
         text: "Are you sure you want to delete this issue?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#2563eb",
         cancelButtonColor: "#8e8e9e",
         confirmButtonText: "Yes, delete it",
       });

      if (!result.isConfirmed) return;

    try {
      const res = await deleteIssue(id).unwrap();
      toast.success(res.message);
    } catch (err) {
      toast.error(err?.data?.message || "Delete failed");
    }
  };

  const handleRowClick = (issue) => {
    setSelectedIssue(issue);
    setDetailsOpen(true);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6 px-1">
        <Input
          placeholder="Search issues..."
          icon={<Search size={18} />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-(--color-surface)"
        />

        <Dropdown
          options={ISSUE_STATUS}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-(--color-surface)"
        />

        <Dropdown
          options={ISSUE_PRIORITY}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="bg-(--color-surface)"
        />

        <Dropdown
          options={assigneeOptions}
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="bg-(--color-surface)"
        />
      </div>

      <Table
        data={issues}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onRowClick={handleRowClick}
        pagination={{
          pageIndex: page - 1,
          setPageIndex: (i) => setPage(i + 1),
          pageSize: 8,
          total: totalPages,
        }}
        setPageIndex={(i) => setPage(i + 1)}
      />

      <IssueModel
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedIssue(null);
        }}
        issue={selectedIssue}
        key={selectedIssue?._id || "new-issue"}
      />

      <IssueDetailsModal
        isOpen={detailsOpen}
        onClose={() => {
          setDetailsOpen(false);
          setSelectedIssue(null);
        }}
        issue={selectedIssue}
      />
    </div>
  );
};

export default AllIssues;
