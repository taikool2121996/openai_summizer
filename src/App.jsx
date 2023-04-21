import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <SearchBar />
      </div>
    </main>
  );
};

export default App;
