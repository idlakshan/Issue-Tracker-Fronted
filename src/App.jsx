import { Download } from "lucide-react";
import "./App.css";
import Button from "./components/ui/button";

function App() {
  return (
    <div className="p-4 space-x-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary" icon={<Download />} />
    </div>
  );
}

export default App;
