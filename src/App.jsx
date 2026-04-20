import { Download, Search } from "lucide-react";
import "./App.css";
import Button from "./components/ui/button";
import Input from "./components/ui/input";

function App() {
  return (
    <div className="p-4 space-x-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary" icon={<Download />} />

      <Input placeholder="Enter your name" icon={<Search />} />
    </div>
  );
}

export default App;
