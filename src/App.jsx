import Navbar from "./Navbar";
import Popular from "./Popular";
import Story from "./Story";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="header">
      <Navbar />
      {/* <Popular /> */}
      <Story />
      <ToastContainer />
    </div>
  );
}

export default App;
