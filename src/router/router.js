import Home from "../components/Home";
import DrinkDetail from "../components/DrinkDetail";

export default {
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/drink/:name",
      component: DrinkDetail
    }
  ],
  mode: "history"
};
