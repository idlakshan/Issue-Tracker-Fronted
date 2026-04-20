import { LogOut } from "lucide-react";

const UserInfo = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-(--color-primary) text-(--color-surface) flex items-center justify-center text-sm font-semibold">
          DL
        </div>
        <div>
          <p className="text-sm font-medium text-(--color-text)">
            Dimuthu Lakshan
          </p>
          <p className="text-xs text-(--color-secondary-text)">
            dimuthu@gmail.com
          </p>
        </div>
      </div>

      <LogOut
        size={18}
        className="text-(--color-secondary-text) cursor-pointer hover:text-red-500"
      />
    </div>
  );
};

export default UserInfo;
