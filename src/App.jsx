import Preview from "./components/Preview";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <Workspace />
      <Preview />
    </div>
  );
}

export default App;
