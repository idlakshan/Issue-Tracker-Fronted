import TeamMemberItem from "./team-member-item";
// import { useSelector } from "react-redux";

const members = [
  { name: "kalum Perera", initials: "JC", assigned: 4, open: 4 },
  { name: "Ashen perera", initials: "TB", assigned: 3, open: 1 },
  { name: "Namal peries", initials: "SR", assigned: 1, open: 1 },
];

const TeamOverview = () => {
  // const { users } = useSelector((state) => state.users);
  // console.log(users);

  return (
    <div className="bg-(--color-surface) border border-(--color-secondary-text)/10 rounded-2xl overflow-hidden shadow-xs">
      {members.map((member, index) => (
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
