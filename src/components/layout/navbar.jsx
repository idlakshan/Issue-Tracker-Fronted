import { Download, Plus } from "lucide-react";
import Button from "../ui/button";
import { useLocation } from "react-router-dom";
import { useState, useMemo } from "react";
import IssueModel from "../../pages/issue-model";
import { exportIssuesToExcel } from "../../util/export-issues-excel";

const routeTitles = {
  "/admin": "Dashboard",
  "/admin/issues": "All Issues",
  "/admin/assignees": "Team Assignees",
};

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const title = useMemo(() => {
    return routeTitles[location.pathname] || "Dashboard";
  }, [location.pathname]);

  const handleDownload = () => {
    exportIssuesToExcel([]);
  };

  return (
    <header className="h-16 bg-(--color-surface) border border-(--color-secondary-text)/10 flex items-center justify-between px-6 shadow-xs">
      <h1 className="text-lg font-semibold text-(--color-text)">
        {title}
      </h1>

      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          icon={<Download size={16} />}
          onClick={handleDownload}
        />

        <Button
          variant="primary"
          icon={<Plus size={16} />}
          onClick={() => setOpen(true)}
        >
          New Issue
        </Button>
      </div>

      <IssueModel open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Navbar;