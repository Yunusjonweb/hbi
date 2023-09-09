import "../../my-app/src/style/style.css";
import Footer from "./app/components/Footer";
import Header from "./app/components/Header";
import Hero from "./app/pages/Hero";
import Train from "./app/pages/Train";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Train />
      <Footer />
    </div>
  );
}

export default App;
