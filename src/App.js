import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Routes>
        <h1>Zadsfsf</h1>
        <ToastContainer />
        <Navbar />
        <Route path="/" element={ <Home />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
      
      
      
    </div>
  );
};
export default App;
