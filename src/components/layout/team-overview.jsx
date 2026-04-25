import { useGetAllUsersQuery } from "../../redux/api/auth-api";
import TeamMemberItem from "./team-member-item";
import TeamSkeleton from "../ui/team-skeleton"; 

const TeamOverview = () => {
  const { data: users, isFetching } = useGetAllUsersQuery();
 //console.log(users);
  const filteredUsers =
    users?.data?.filter((user) => user.role !== "ADMIN") || [];

  return (
    <div className="bg-(--color-surface) border border-(--color-secondary-text)/10 rounded-2xl overflow-hidden shadow-xs">
      {isFetching ? (
        <TeamSkeleton count={7} />
      ) : (
        <div className="divide-y divide-gray-100">
          {filteredUsers.map((member, index) => (
            <TeamMemberItem
              key={index}
              name={`${member.firstName} ${member.lastName}`}
              initials={member.firstName[0] + member.lastName[0]}
              assigned={member.totalIssues}
              open={member.openIssues}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamOverview;
