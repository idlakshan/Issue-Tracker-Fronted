import { useState } from "react";
import { Dropdown } from "../components/ui/dropdown";
import { ISSUE_STATUS, ISSUE_PRIORITY } from "../constants/app-constants";
import Table from "../components/ui/table";
import Input from "../components/ui/input";
import { Search } from "lucide-react";
import { data } from "../util/table-data";
import { useGetAllUsersQuery } from "../redux/api/auth-api";

const AllIssues = () => {
  const { data: users } = useGetAllUsersQuery();

  const [status, setStatus] = useState("ALL");
  const [priority, setPriority] = useState("ALL");
  const [assignee, setAssignee] = useState("ALL");
  const [search, setSearch] = useState("");

   const filteredUsers = users?.data?.filter((user) => user.role !== "ADMIN") || [];

  const assigneeOptions = filteredUsers.map((user) => ({
    label: `${user.firstName} ${user.lastName}`,
    value: user._id,
  }));

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

      <Table data={data} />
    </div>
  );
};

export default AllIssues;
