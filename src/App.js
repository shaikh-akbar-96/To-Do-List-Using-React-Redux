import AppContent from "./components/AppContent.jsx";
import AppHeader from "./components/AppHeader.jsx";
import Pagetitle from "./components/PageTitle.jsx";
import { Toaster } from "react-hot-toast";
import "./styles/index.css";
function App() {
  return (
    <>
      <div>
        <Pagetitle>TODO LIST</Pagetitle>
        <div className="app__wrapper">
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster toastOptions={{ style: { fontSize: "1.4rem" } }} />
    </>
  );
}

export default App;
