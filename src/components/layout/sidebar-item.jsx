import { Link } from "react-router-dom";

const SidebarItem = ({ icon, label, count, to, active = false }) => {
  return (
    <Link
      to={to}
      className={`
        flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition
        ${
          active
            ? "bg-(--color-primary)/10 text-(--color-primary)"
            : "text-(--color-secondary-text) hover:bg-gray-100"
        }
      `}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>

      {count !== undefined && (
        <span className="text-xs bg-(--color-primary)/10 text-(--color-primary) px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </Link>
  );
};

export default SidebarItem;
