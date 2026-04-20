import { Download, Plus } from "lucide-react";
import Button from "../ui/button";
import { useLocation } from "react-router-dom";
import { getAllUsers } from "../../api/user-service";
import { useState } from "react";
import IssueModel from "../../pages/issue-model";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const getTitle = () => {
    const path = location.pathname;
    //console.log( path);

    if (path === "/") return "Dashboard";
    if (path === "/issues") return "All Issues";
    if (path === "/assignees") return "Team Assignees";

    return "Dashboard";
  };

  const getAll = async () => {
    try {
      const users = await getAllUsers();    

      console.log(users);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  return (
    <header className="h-16 bg-(--color-surface) border border-(--color-secondary-text)/10 flex items-center justify-between px-6 shadow-xs">
      <h1 className="text-lg font-semibold text-(--color-text)">
        {getTitle()}
      </h1>
      <div className="flex items-center gap-3">
        <Button variant="secondary" icon={<Download size={16} onClick={getAll} />} />

        <div>
          <Button variant="primary" icon={<Plus size={16}/>} onClick={() => setOpen(true)}>
            New Issue
          </Button>
        </div>
      </div>

       <IssueModel open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Navbar;
