import logo from "./logo.svg";
import "./App.css";
import Stylesheet1 from "./Stylesheet1";
import MyForm from "./usestate";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/footer";
import Sidebar from "./Sidebar/sidebar";

function App() {
  return (
    <>
      <div className="nav-design">
        <Navbar />
      </div>
      <div className="parent-div">
        <div className="sidebar-design">
          <Sidebar />
        </div>

        <div className="App">
          <Stylesheet1 />
          <MyForm />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
