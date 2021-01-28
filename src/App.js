import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainFile from "./Component/MainFile";
import { GlobalStyle } from "./GlobalStyle";
import "antd/dist/antd.css";
import HomeDisplay from "./ContextFile/HomeDisplay";
import HeaderView from "./ContextFile/HeaderView";
import UseCase from "./ContextFile/UseCase";
import FeedUpPage from "./ContextFile/FeedUpPage";
import { GlobalProvider } from "./ContextFile/Context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <HeaderView />
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={HomeDisplay} />
            <Route exact path="/usecase" component={UseCase} />
            <Route exact path="/feed" component={FeedUpPage} />
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
