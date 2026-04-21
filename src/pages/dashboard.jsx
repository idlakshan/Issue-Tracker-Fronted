import { AlertCircle, CircleDot, Clock, ListTodo } from "lucide-react";
import CountCard from "../components/ui/count-card";
import Table from "../components/ui/table";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import TeamOverview from "../components/layout/team-overview";
import { useGetIssueCountQuery, useGetIssuesQuery } from "../redux/api/issue-api";

const Dashboard = () => {
  const navigate = useNavigate();
  const {data:counts} = useGetIssueCountQuery();
 // console.log(counts)
  const { data } = useGetIssuesQuery({
    page: 1,
    limit: 6,
  });
const issues = data?.data?.issues || [];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <CountCard
          title="Total"
          value={counts?.data?.totalIssues}
          subtitle="All issues"
          icon={<ListTodo size={18} className="text-(--color-avatar-bg)" />}
        />

        <CountCard
          title="Open"
          value={counts?.data?.openIssues}
          subtitle="Needs attention"
          icon={<CircleDot size={18} className="text-(--color-primary)" />}
          color="text-(--color-primary)"
        />

        <CountCard
          title="In Progress"
          value={counts?.data?.inProgressIssues}
          subtitle="Being worked on"
          icon={<Clock size={18} className="text-orange-500" />}
          color="text-orange-600"
        />

        <CountCard
          title="Critical open"
          value={counts?.data?.criticalOpenIssues}
          subtitle="Unresolved"
          icon={
            <AlertCircle
              size={18}
              className="text-(--color-priority-critical-text)"
            />
          }
          color="text-(--color-priority-critical-text)"
        />
      </div>

      <div className="grid grid-cols-8 gap-6 mt-3">
        <div className="col-span-6 space-y-3 mt-6">
          <div className="flex items-center justify-between px-2">
            <h1 className="text-lg font-semibold text-(--color-text)">
              Recent Issues
            </h1>

            <Button
              variant="secondary"
              className="px-2! py-1!"
              onClick={() => navigate("/admin/issues")}
            >
              View All
            </Button>
          </div>

          <Table
             data={issues}
            hideColumns={["created", "actions"]}
            hideFooter={true}
          />
        </div>
        <div className="col-span-2 space-y-3 mt-6 ">
          <h1 className="text-lg font-semibold text-(--color-text)">
            Team Overview
          </h1>
          <TeamOverview />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
