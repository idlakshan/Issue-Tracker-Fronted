import React from "react";

const PriorityBadge = ({ priority }) => {
  const color =
    priority === "High"
      ? "bg-(--color-priority-high-bg) text-(--color-priority-high-text) ring-[1px] ring-(--color-priority-high-ring)"
      : priority === "Medium"
      ? "bg-(--color-priority-medium-bg) text-(--color-priority-medium-text) ring-[1px] ring-(--color-priority-medium-ring)"
      : priority === "Low"
      ? "bg-(--color-priority-low-bg) text-(--color-priority-low-text) ring-[1px] ring-(--color-priority-low-ring)"
      : "bg-(--color-priority-critical-bg) text-(--color-priority-critical-text) ring-[1px] ring-(--color-priority-critical-ring)";

  return (
    <span
      className={`px-2.5 py-1 text-xs font-medium rounded-full w-fit ${color}`}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;