import { Route, Switch } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Switch>
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
