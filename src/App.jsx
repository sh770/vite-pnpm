import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
// import Counter from "./components/Counter";
// import CounterComponent from "./components/CounterComponent";
// import TotalComponent from "./components/TotalComponent";
import { TotalProvider } from "./components/context";
import "./index.css";

function App() {
  return (
    <TotalProvider>
      <div className="app">
        <Header />
        <Main />
        <Footer />
        {/* <Counter /> */}
        {/* <CounterComponent /> */}
        {/* <TotalComponent /> */}
      </div>
    </TotalProvider>
  );
}

export default App;
