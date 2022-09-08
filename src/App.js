import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Timeline from "./layout/Timeline";


function App() {
  return (
    <div className="min-h-screen max-w-7xl flex mx-auto">
      <Sidebar />
      <Content />
      <Timeline />
    </div>
  );
}

export default App;
