import React from "react";

const StatusBadge = ({ status }) => {
  const color =
    status === "Open"
      ? "bg-(--color-status-open-bg) text-(--color-status-open-text)"
      : status === "Closed"
      ? "bg-(--color-status-closed-bg) text-(--color-status-closed-text)"
      : status === "In Progress"
      ? "bg-(--color-status-progress-bg) text-(--color-status-progress-text)"
      : "bg-(--color-status-resolved-bg) text-(--color-status-resolved-text)";

  return (
    <span
      className={`px-2.5 py-1 text-xs font-medium rounded-full flex items-center gap-1 w-fit ${color}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
      {status}
    </span>
  );
};

export default StatusBadge;