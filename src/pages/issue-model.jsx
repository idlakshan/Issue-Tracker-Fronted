import { useState } from "react";
import Input from "../components/ui/input";
import { Dropdown } from "../components/ui/dropdown";
import {
  ISSUE_PRIORITY,
  ISSUE_STATUS,
  ISSUE_SEVERITY,
} from "../constants/app-constants";
import Button from "../components/ui/button";
import { X } from "lucide-react";
import { useGetAllUsersQuery } from "../redux/api/auth-api";

const IssueModel = ({ open, onClose }) => {
  const { data: users } = useGetAllUsersQuery();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");
  const [priority, setPriority] = useState("Medium");
  const [severity, setSeverity] = useState("Moderate");
  const [assignee, setAssignee] = useState("");

  const statusOptions = ISSUE_STATUS.filter((option) => option.value !== "All");

  const priorityOptions = ISSUE_PRIORITY.filter(
    (option) => option.value !== "All",
  );

  //console.log(users);

  const filteredUsers = users?.data?.filter((user) => user.role !== "ADMIN");

  const assigneeOptions = filteredUsers.map((user) => ({
    label: `${user.firstName} ${user.lastName}`,
    value: user._id,
  }));

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative bg-(--color-surface) w-full max-w-xl rounded-2xl shadow-lg z-10">
        <div className="flex justify-between items-center px-6 py-4 border-b border-(--color-secondary-text)/50">
          <h2 className="font-semibold text-lg">New Issue</h2>
          <X
            onClick={onClose}
            className="text-(--color-secondary-text) cursor-pointer"
          />
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-(--color-secondary-text)">
              Title <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Issue title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full "
            />
          </div>

          <div>
            <label className="text-sm font-medium text-(--color-secondary-text)">
              Description
            </label>
            <textarea
              className="w-full mt-1 border border-(--color-secondary-text)/50 rounded-md px-3 py-2 text-sm outline-none"
              placeholder="Describe the issue"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-(--color-secondary-text)">
                Status
              </label>
              <Dropdown
                options={statusOptions}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-1 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-(--color-secondary-text)">
                Priority
              </label>
              <Dropdown
                options={priorityOptions}
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="mt-1 w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-(--color-secondary-text)">
                Severity
              </label>
              <Dropdown
                options={ISSUE_SEVERITY}
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                className="mt-1 w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-(--color-secondary-text)">
                Assignee
              </label>
              <Dropdown
                options={assigneeOptions}
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className="mt-1 w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 px-6 py-4 border-t border-(--color-secondary-text)/50">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button>Save issue</Button>
        </div>
      </div>
    </div>
  );
};

export default IssueModel;
