import "./App.css";
import Sidebar from "./components/Sidebar";
import { PrimarySearchAppBar } from "./components/Appbar";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div className="relative flex">
      <Sidebar />
      <PrimarySearchAppBar />
      <Dashboard />
    </div>
  );
}

export default App;
