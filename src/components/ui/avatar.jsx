import React from "react";

export const Avatar = ({ assignee }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-full bg-(--color-avatar-bg) text-(--color-avatar-text) flex items-center justify-center text-[10px] font-medium">
        {assignee?.initials}
      </div>

      <span className="text-sm text-(--color-text)">
        {assignee?.name}
      </span>
    </div>
  );
};