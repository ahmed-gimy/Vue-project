import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/Home/Home.vue";
import Contacts from "../components/pages/contacts/Contacts.vue";
import createContact from "../components/pages/contacts/create.vue";
import editContact from "../components/pages/contacts/edit.vue";
import Projects from "../components/pages/projects/Projects.vue";
import createProject from "../components/pages/projects/createProject.vue";
import editProject from "../components/pages/projects/editProject.vue";
import Products from "../components/pages/products/Products.vue";
import createProduct from "../components/pages/products/createProduct.vue";
import editProduct from "../components/pages/products/editProduct.vue";
import Admin from "../components/pages/Admin.vue";
import Users from "../components/pages/Users.vue";
import Settings from "../components/pages/Settings.vue";
import Invoice from "../components/pages/Invoice.vue";
import Quote from "../components/pages/Quote.vue";
import Tasks from "../components/pages/tasks/Tasks.vue";
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
    path:"/contacts/create",
    component: createContact,
  },
  {
    path:"/contacts/edit",
    component: editContact,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path:"/projects/create",
    component: createProject,
  },
  {
    path:"/projects/edit",
    component: editProject,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path:"/products/create",
    component: createProduct,
  },
  {
    path:"/products/edit",
    component: editProduct,
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
