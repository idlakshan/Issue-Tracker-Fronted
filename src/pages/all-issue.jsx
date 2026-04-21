import { useState } from "react";
import { Dropdown } from "../components/ui/dropdown";
import { ISSUE_STATUS, ISSUE_PRIORITY } from "../constants/app-constants";
import Table from "../components/ui/table";
import Input from "../components/ui/input";
import { Search } from "lucide-react";
import { useGetAllUsersQuery } from "../redux/api/auth-api";
import { useGetIssuesQuery } from "../redux/api/issue-api";

const AllIssues = () => {
  const { data: users } = useGetAllUsersQuery();

  const [status, setStatus] = useState("ALL");
  const [priority, setPriority] = useState("ALL");
  const [assignee, setAssignee] = useState("ALL");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredUsers =
    users?.data?.filter((user) => user.role !== "ADMIN") || [];

  const assigneeOptions = [
    {
      label: "All Assignees",
      value: "ALL",
    },
    ...filteredUsers.map((user) => ({
      label: `${user.firstName} ${user.lastName}`,
      value: user._id,
    })),
  ];

  const { data } = useGetIssuesQuery({
    page,
    limit: 5,
    ...(status !== "ALL" && { status }),
    ...(priority !== "ALL" && { priority }),
    ...(assignee !== "ALL" && { assignee }),
    ...(search.trim() && { search }),
  });

  //console.log(data);

  const issues = data?.data?.issues || [];
  const totalPages = data?.data?.totalPages || 0;
  //console.log(totalPages);
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
        pagination={{
          pageIndex: page - 1,
          setPageIndex: (i) => setPage(i + 1),
          pageSize: 8,
          total: totalPages,
        }}
        setPageIndex={(i) => setPage(i + 1)}
      />
    </div>
  );
};

export default AllIssues;
