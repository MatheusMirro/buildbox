import { GlobalStyle } from "./GlobalStyle";

import Header from "./components/Header/index";
import User from "./components/User/index";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <User />
    </div>
  );
}

export default App;
