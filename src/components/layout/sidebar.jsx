import { LayoutDashboard, ListTodo, Users, ShieldHalf } from "lucide-react";
import SidebarSection from "./sidebar-section";
import SidebarItem from "./sidebar-item";
import UserInfo from "./user-info";
import { useLocation } from "react-router-dom";
import { useGetIssueCountQuery } from "../../redux/api/issue-api";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const {data:counts} = useGetIssueCountQuery();

  return (
    <aside className="w-64 bg-(--color-surface) border-r border-(--color-secondary-text)/10 flex flex-col justify-between shadow-xs">
      <div>
        <div className="flex items-center gap-2 h-20 px-4 border-b border-(--color-secondary-text)/10">
          <div className="w-8 h-8 rounded-md bg-(--color-primary) flex items-center justify-center text-(--color-surface)">
            <ShieldHalf size={18} />
          </div>
          <h1 className="text-lg font-semibold text-(--color-text)">
            Issue<span className="text-(--color-primary)">Tracker</span>
          </h1>
        </div>

        <div className="px-3 py-4 space-y-6">
          <SidebarSection title="OVERVIEW">
            <SidebarItem
              icon={<LayoutDashboard size={18} />}
              label="Dashboard"
              to="/admin"
              active={currentPath === "/admin"}
            />
            <SidebarItem
              icon={<ListTodo size={18} />}
              label="All Issues"
              count={counts?.data?.totalIssues}
              to="/admin/issues"
              active={currentPath === "/admin/issues"}
            />
          </SidebarSection>

          <SidebarSection title="TEAM">
            <SidebarItem
              icon={<Users size={18} />}
              label="Assignees"
              to="/admin/assignees"
              active={currentPath === "/admin/assignees"}
            />
          </SidebarSection>
        </div>
      </div>

      <div className="border-t border-(--color-secondary-text)/10 p-4">
        <UserInfo />
      </div>
    </aside>
  );
};

export default Sidebar;
