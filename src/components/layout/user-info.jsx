import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/features/auth-slice";


const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  //console.log( user);

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-(--color-primary) text-(--color-surface) flex items-center justify-center text-sm font-semibold">
          {user?.initials}
        </div>
        <div>
          <p className="text-sm font-medium text-(--color-text)">
            {`${user?.firstName} ${user?.lastName}`}
          </p>
          <p className="text-xs text-(--color-secondary-text)">
            {user?.email}
          </p>
        </div>
      </div>

      <LogOut 
        size={18}
        className="text-(--color-secondary-text) cursor-pointer hover:text-red-500"
        onClick={handleLogout}
      />
    </div>
  );
};

export default UserInfo;
