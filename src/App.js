import "./App.css";
import Auth from "./Components/Auth";
import Counter from "./Components/Counter";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Auth />
      <Counter></Counter>
    </div>
  );
}

export default App;
