import { Avatar } from "../ui/avatar";

const TeamMemberItem = ({ name, initials, assigned, open }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-(--color-secondary-text)/10">
      <div className="flex items-center gap-3">
        <Avatar assignee={{ initials }} />
        <div>
          <p className="text-sm font-medium text-(--color-text)">{name}</p>
          <p className="text-xs text-(--color-secondary-text)">
            {assigned} assigned
          </p>
        </div>
      </div>

      <span className="text-xs font-medium px-2 py-1 rounded-full bg-(--color-primary)/10 text-(--color-primary)">
        {open} open
      </span>
    </div>
  );
};

export default TeamMemberItem;
