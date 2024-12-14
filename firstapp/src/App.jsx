import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import News from "./components/News";
function App() {
  return (
    <div className="px-2 py1 md:py-10 md:px-20">
      <Navbar />
      <div className="grid  md:grid-cols-3 gap-3 md:gap-6 mb-6">
        <Main />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default App;
