import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainFile from "./Component/MainFile";
import { GlobalStyle } from "./GlobalStyle";
import "antd/dist/antd.css";
import HomeDisplay from "./ContextFile/HomeDisplay";
import HeaderView from "./ContextFile/HeaderView";
import FeedUpPage from "./ContextFile/FeedUpPage";
import { GlobalProvider } from "./ContextFile/Context/GlobalState";
import Home from "./NewClass/Home";
import UseCase from "./NewClass/UseCase";
import HeaderBar from "./NewClass/HeaderBar";
import AddUser from "./NewClass/AddUser";
import EditUser from "./NewClass/EditUser";
import { GlobalProvide } from "./NewClass/ContextAPI/Global";
import MovieScreen from "./Movie/MovieScreen";
import Virtualization from "./NewClass/Virtualization";

function App() {
  return (
    <>
      <GlobalProvide>
        <Router>
          <HeaderBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie" component={MovieScreen} />
            <Route exact path="/virt" component={Virtualization} />
            <Route exact path="/use" component={UseCase} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvide>
    </>
  );
}

export default App;
