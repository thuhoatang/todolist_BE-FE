import Detail from "../components/pages/Detail";
import EmptyPage from "../components/pages/EmptyPage";
import Home from "../components/pages/Home";
const routesDefault = [
  { url: "/", component: Home },
  { url: "/detail/:id", component: Detail },
  { url: "*", component: EmptyPage },
];

export default routesDefault;
