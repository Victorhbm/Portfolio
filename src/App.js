import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Switch>
      <Route exact path="/projects" component={ProjectsPage} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
