import { X } from "lucide-react";
import StatusBadge from "../components/ui/status-badge";
import PriorityBadge from "../components/ui/priority-badge";
import { Avatar } from "../components/ui/avatar";
import Button from "../components/ui/button";

const IssueDetailsModal = ({ isOpen, onClose }) => {
    
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="w-225 h-[80vh] bg-(--color-surface) rounded-2xl shadow-xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-(--color-secondary-text)/10">
          <h2 className="text-sm font-semibold text-(--color-secondary-text)">
            id
          </h2>

          <div className="flex items-center gap-3">
            <Button variant="secondary" className="text-sm mr-4">
              Edit
            </Button>
            <X
              size={18}
              onClick={onClose}
              className="cursor-pointer text-(--color-secondary-text)"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 flex-1 overflow-hidden">
          <div className="col-span-2 p-6 py-2 space-y-5 overflow-y-auto">
            <div>
              <h1 className="text-lg font-semibold text-(--color-text)">
                issue
              </h1>

              {/* <div className="flex gap-2 mt-2">
                <StatusBadge status="Resolved" />
                <PriorityBadge priority="High" />
              </div> */}
            </div>
            <div>
              <p className="text-xs font-semibold text-(--color-secondary-text) mb-2">
                DESCRIPTION
              </p>

              <div className="bg-gray-50 border rounded-lg p-3 text-sm text-(--color-secondary-text)">
                hello how are u hsadad jlsajdlajd adadad asada dada hello how
                are u hsadad jlsajdlajd adadad asada dada hello how are u hsadad
                jlsajdlajd adadad asada dada
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-(--color-secondary-text) mb-3">
                ACTIVITY{" "}
                <span className="text-xs bg-(--color-status-closed-text)/10 text-(--color-status-closed-text) px-2 py-0.5 rounded-full ml-2">
                  2
                </span>
              </p>

              <div className="flex gap-3 mb-4">
                <Avatar assignee={{ initials: "AM" }} />

                <div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">admin Name</span>
                    <span className="text-xs bg-purple-100 text-(--color-avatar-bg) px-2 py-0.5 rounded">
                      Admin
                    </span>
                    <span className="text-xs text-(--color-secondary-text)">
                      2026-04-21
                    </span>
                  </div>

                  <p className="text-sm text-(--color-secondary-text) mt-1">
                    Dimuthu Lakshan created this issue
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-end">
                <Avatar assignee={{ initials: "AM" }} />

                <div className="flex-1 flex gap-2">
                  <textarea
                    className="flex-1 mt-1 border border-(--color-secondary-text)/50 rounded-md px-3 py-2 text-sm outline-none resize-none"
                    placeholder="Leave a comment"
                  />

                  <Button className="px-3 py-1 text-sm whitespace-nowrap self-end">
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
                <Avatar assignee={{ initials: "TB" }} />
                <span className="text-sm font-medium">Taylor Brooks</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-(--color-secondary-text) mb-1">
                PRIORITY
              </p>
              <PriorityBadge priority="High" />
            </div>

            <div>
              <p className="text-xs text-(--color-secondary-text) mb-1">
                SEVERITY
              </p>
              <span className="text-sm text-(--color-text)">Moderate</span>
            </div>

            <div>
              <p className="text-xs text-(--color-secondary-text) mb-1">
                STATUS
              </p>
              <StatusBadge status="Resolved" />
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
                <Button variant="secondary" className="w-full">
                  Open
                </Button>
                <Button variant="secondary" className="w-full">
                  In Progress
                </Button>
                <Button variant="secondary" className="w-full">
                  Resolved
                </Button>
                <Button variant="secondary" className="w-full">
                  Closed
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t border-(--color-secondary-text)/10">
              <Button className="w-full bg-red-100 border border-red-500 hover:bg-red-600 text-red-600 hover:text-(--color-surface)">
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
