import { Download, Search } from "lucide-react";
import "./App.css";
import Button from "./components/ui/button";
import Input from "./components/ui/input";
import { Dropdown } from "./components/ui/dropdown";
import Table from "./components/ui/table";

const options = [
  { label: "All", value: "" },
  { label: "Open", value: "open" },
  { label: "Closed", value: "closed" },
];

const issues = [
  {
    id: "ISS-001",
    issue: "Login button not working",
    status: "Open",
    priority: "High",
    severity: "Major",
    assignee: { name: "John Doe", initials: "JD" },
    activity: 3,
    created: "2026-04-20",
  },
  {
    id: "ISS-002",
    issue: "Page crash on submit",
    status: "Closed",
    priority: "Critical",
    severity: "Critical",
    assignee: { name: "Jane Smith", initials: "JS" },
    activity: 5,
    created: "2026-04-18",
  },
];

function App() {
  return (
    <div className="p-4 space-x-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary" icon={<Download />} />

      <Input placeholder="Enter your name" icon={<Search />} />

      <Dropdown options={options} />

      <Table data={issues}  />
    </div>
  );
}

export default App;
