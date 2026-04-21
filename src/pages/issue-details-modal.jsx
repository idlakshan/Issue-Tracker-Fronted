import { X } from "lucide-react";
import { useRef, useState } from "react";
import { Avatar } from "../components/ui/avatar";
import Button from "../components/ui/button";
import PriorityBadge from "../components/ui/priority-badge";
import StatusBadge from "../components/ui/status-badge";
import { toast } from "react-toastify";
import {
  useDeleteIssueMutation,
  useUpdateIssueStatusMutation,
} from "../redux/api/issue-api";
import Swal from "sweetalert2";

const IssueDetailsModal = ({ isOpen, onClose, issue }) => {
  //console.log(issue)
  const [updateStatus] = useUpdateIssueStatusMutation();
  const [deleteIssue] = useDeleteIssueMutation();
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Admin Name",
      initials: "AM",
      text: "Dimuthu Lakshan created this issue",
      date: "2026-04-21",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const endRef = useRef(null);

  //comment post function
  const handlePost = () => {
    if (!newComment.trim()) return;

    const newItem = {
      id: Date.now(),
      name: "Admin Name",
      initials: "AM",
      text: newComment,
      date: new Date().toLocaleString(),
    };

    setComments((prev) => [...prev, newItem]);
    setNewComment("");

    setTimeout(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  //update issue status function
  const handleStatusChange = async (status) => {
    const result = await Swal.fire({
      title: "Change Status",
      text: `Change status to "${status}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#8e8e9e",
      confirmButtonText: "Confirm",
    });

    if (!result.isConfirmed) return;

    try {
      await updateStatus({ id: issue._id, status }).unwrap();
      toast.success("Status updated");
      onClose();
    } catch (err) {
      toast.error(err?.data?.message || "Update failed");
    }
  };

  //delete issue function
  const handleDelete = async () => {
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
      await deleteIssue(issue._id).unwrap();
      toast.success("Issue deleted successfully");
      onClose();
    } catch (err) {
      toast.error(err?.data?.message || "Delete failed");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-225 h-[80vh] bg-(--color-surface) rounded-2xl shadow-xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-(--color-secondary-text)/10">
          <h2 className="text-sm font-semibold text-(--color-secondary-text)">
            {issue?._id}
          </h2>

          <div className="flex items-center gap-3">
            <X
              size={20}
              onClick={onClose}
              className="cursor-pointer text-(--color-secondary-text)"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 flex-1 overflow-hidden">
          <div className="col-span-2 p-6 py-2 space-y-5 overflow-y-auto">
            <div>
              <h1 className="text-lg font-semibold text-(--color-text)">
                {issue?.title}
              </h1>
            </div>

            <div>
              <p className="text-xs font-semibold text-(--color-secondary-text) mb-2">
                DESCRIPTION
              </p>

              <div className="bg-gray-50 border rounded-lg p-3 text-sm text-(--color-secondary-text)">
                {issue?.description}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-(--color-secondary-text) mb-3">
                ACTIVITY{" "}
                <span className="text-xs bg-(--color-status-closed-text)/10 text-(--color-status-closed-text) px-2 py-0.5 rounded-full ml-2">
                  {issue?.activityCount}
                </span>
              </p>

              {comments.map((c) => (
                <div key={c.id} className="flex gap-3 mb-4">
                  <Avatar assignee={{ initials: c.initials }} />

                  <div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">{c.name}</span>
                      <span className="text-xs bg-purple-100 text-(--color-avatar-bg) px-2 py-0.5 rounded">
                        Admin
                      </span>
                      <span className="text-xs text-(--color-secondary-text)">
                        {c.date}
                      </span>
                    </div>

                    <p className="text-sm text-(--color-secondary-text) mt-1">
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}

              <div ref={endRef} />

              <div className="flex gap-3 items-end">
                <Avatar assignee={{ initials: "DL" }} />

                <div className="flex-1 flex gap-2">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handlePost();
                      }
                    }}
                    className="flex-1 mt-1 border border-(--color-secondary-text)/50 rounded-md px-3 py-2 text-sm outline-none resize-none"
                    placeholder="Leave a comment"
                  />

                  <Button
                    onClick={handlePost}
                    className="px-3 py-1 text-sm whitespace-nowrap self-end"
                  >
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l border-(--color-secondary-text)/10 p-6 overflow-y-auto space-y-5">
            <div>
              <p className="text-xs text-(--color-secondary-text) mb-1">
                ASSIGNEE
              </p>
              <div className="flex items-center gap-2">
                <Avatar assignee={issue?.assignee} />
              </div>
            </div>

            <div>
              <p className="text-xs text-(--color-secondary-text) mb-2">
                PRIORITY
              </p>
              <PriorityBadge priority={issue?.priority} />
            </div>

            <div>
              <p className="text-xs text-(--color-secondary-text) mb-1">
                SEVERITY
              </p>
              <span className="text-sm text-(--color-text)">
                {issue?.severity}
              </span>
            </div>

            <div>
              <p className="text-xs text-(--color-secondary-text) mb-2">
                STATUS
              </p>
              <StatusBadge status={issue?.status} />
            </div>

            <div>
              <p className="text-xs text-(--color-secondary-text) mb-1">
                CREATED
              </p>
              <span className="text-sm text-(--color-text)">2026-04-26</span>
            </div>

            <div>
              <p className="text-xs text-(--color-secondary-text) mb-2">
                CHANGE STATUS
              </p>

              <div className="space-y-2">
                <Button
                  variant="secondary"
                  className="w-full hover:bg-(--color-primary)/10! !hover:text-(--color-primary)"
                  onClick={() => handleStatusChange("Open")}
                >
                  Open
                </Button>
                <Button
                  variant="secondary"
                  className="w-full hover:bg-(--color-primary)/10! !hover:text-(--color-primary)"
                  onClick={() => handleStatusChange("In Progress")}
                >
                  In Progress
                </Button>
                <Button
                  variant="secondary"
                  className="w-full hover:bg-(--color-primary)/10! !hover:text-(--color-primary)"
                  onClick={() => handleStatusChange("Resolved")}
                >
                  Resolved
                </Button>
                <Button
                  variant="secondary"
                  className="w-full hover:bg-(--color-primary)/10! !hover:text-(--color-primary)"
                  onClick={() => handleStatusChange("Closed")}
                >
                  Closed
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t border-(--color-secondary-text)/10">
              <Button
                className="w-full bg-red-100 border border-red-500 hover:bg-red-600
               text-red-600 hover:text-(--color-surface)"
                onClick={handleDelete}
              >
                Delete Issue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetailsModal;
