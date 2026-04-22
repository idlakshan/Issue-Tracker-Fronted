import { useGetAllUsersQuery } from "../../redux/api/auth-api";
import TeamMemberItem from "./team-member-item";

const TeamOverview = () => {
  const { data: users, isLoading } = useGetAllUsersQuery();

  //console.log(users);
  const filteredUsers =
    users?.data?.filter((user) => user.role !== "ADMIN") || [];

  if (isLoading) {
    return (
      <div className="bg-(--color-surface) border border-(--color-secondary-text)/10 rounded-2xl p-4">
        Loading team members...
      </div>
    );
  }

  return (
    <div className="bg-(--color-surface) border border-(--color-secondary-text)/10 rounded-2xl overflow-hidden shadow-xs">
      {filteredUsers.map((member, index) => (
        <TeamMemberItem
          key={index}
          name={`${member.firstName} ${member.lastName}`}
          initials={member.initials}
          assigned={member.totalIssues}
          open={member.openIssues}
        />
      ))}
    </div>
  );
};

export default TeamOverview;
