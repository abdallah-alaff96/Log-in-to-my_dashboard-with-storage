import React, { useContext } from "react";

import AuthContext from "./store/auth-context";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const cxt = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {/* we will not using useContext() with the following 2 lines because they were passed as a props to be used in the next component (not a bridge for other nested component) */}
        {!cxt.isLoggedIn && <Login />}
        {cxt.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
