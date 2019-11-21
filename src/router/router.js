import Home from "../components/Home";
import DrinkDetail from "../components/DrinkDetail";
import Colors from "../components/Colors";

export default {
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/drink/:name",
      component: DrinkDetail
    },
    {
      path: "/colors",
      component: Colors
    }
  ],
  mode: "history"
};
