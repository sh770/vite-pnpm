// import Footer from "./components/Footer";
import CounterComponent from "./components/CounterComponent";
// import Header from "./components/Header";
import TotalComponent from "./components/TotalComponent";
// import Main from "./components/Main";
// import CounterComponent from "./components/CounterComponent";
// import TotalComponent from "./components/TotalComponent";
import { TotalProvider } from "./components/context";
// import TotalComponent from "./components/TotalComponent";
// import Counter from "./components/counter";

function App() {
  return (
    <TotalProvider>
      <div>
        {/* <Header /> */}
        {/* <Main /> */}
        {/* <Footer /> */}
        {/* <Counter /> */}
        <CounterComponent />
        <TotalComponent />
      </div>
    </TotalProvider>
  );
}

export default App;
