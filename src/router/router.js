import Home from "../components/Home";
import DrinkDetail from "../components/DrinkDetail";
import Colors from "../components/Colors";
import About from "../components/About";
import Products from "../components/Products";
import References from "../components/References";
import Contact from "../components/Contact";

export default {
  routes: [
    {
      path: "/",
      name: "Anasayfa",
      component: Home
    },
    {
      path: "/drink/:name",
      component: DrinkDetail
    },
    {
      path: "/colors",
      name: "colors",
      component: Colors
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/products",
      name: "Products",
      component: Products
    },
    {
      path: "/references",
      name: "References",
      component: References
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ],
  mode: "history"
};
