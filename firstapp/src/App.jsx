import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import News from "./components/News";
function App() {
  return (
    <div className="py-10 px-20">
      <Navbar />
      <div className="grid grid-cols-3 gap-6 mb-6">
        <Main />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default App;
