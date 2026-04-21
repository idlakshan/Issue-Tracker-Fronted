import * as XLSX from "xlsx";

export const exportIssuesToExcel = (issues = []) => {
  if (!issues.length) return;

  const rows = issues.map((issue) => ({
    "Issue ID": issue._id,
    Title: issue.title,
    Status: issue.status,
    Priority: issue.priority,
    Severity: issue.severity,
    Assignee: `${issue.assignee.firstName} ${issue.assignee.lastName}`,
    "Created Date": new Date(issue.createdAt).toLocaleDateString(),
  }));

  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Issues");

  XLSX.writeFile(workbook, "issues.xlsx");
};