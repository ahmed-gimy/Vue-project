import { createRouter, createWebHistory } from "vue-router";
// import Layout from "../components/Layout.vue";
import Home from "../components/pages/Home.vue";
import Contacts from "../components/pages/Contacts.vue";
import Products from "../components/pages/Products.vue";
import Projects from "../components/pages/Projects.vue";
import Admin from "../components/pages/Admin.vue";
import Users from "../components/pages/Users.vue";
import Settings from "../components/pages/Settings.vue";
import Invoice from "../components/pages/Invoice.vue";
import Quote from "../components/pages/Quote.vue";
import Tasks from "../components/pages/Tasks.vue";
import Reports from "../components/pages/Reports.vue";
import NotFound from "../NotFound.vue";

const routes = [

  {
    path: "/",
    component: Home,
  },
  {
    path: "/contacts",
    component: Contacts,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/invoice",
    component: Invoice,
  },
  {
    path: "/quote",
    component: Quote,
  },
  {
    path: "/tasks",
    component: Tasks,
  },
  {
    path: "/reports",
    component: Reports,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
