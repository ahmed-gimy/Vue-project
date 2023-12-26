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
import Users from "../components/pages/users/Users.vue";
import createUser from "../components/pages/users/createUser.vue";
import editUser from "../components/pages/users/editUser.vue";
import Quote from "../components/pages/quotations/Quote.vue";
import createQuote from "../components/pages/quotations/createQuote.vue";
import editQuote from "../components/pages/quotations/editQuote.vue";
import Settings from "../components/pages/Settings.vue";
import Invoice from "../components/pages/Invoice.vue";
import Tasks from "../components/pages/tasks/Tasks.vue";
import Reports from "../components/pages/Reports.vue";
import NotFound from "../NotFound.vue";

const routes = [

  {
    path: "/",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/contacts",
    component: Contacts,
    meta: { title: "Contacts" },
  },
  {
    path:"/contacts/create",
    component: createContact,
    meta: { title: "Create Contact" },
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
    path: "/users",
    component: Users,
  },
  {
    path:"/users/create",
    component: createUser,
  },
  {
    path:"/users/edit",
    component: editUser,
  },
  {
    path: "/quote",
    component: Quote,
  },
  {
    path:"/quote/create",
    component: createQuote,
  },
  {
    path:"/quote/edit",
    component: editQuote,
  },
  {
    path: "/admin",
    component: Admin,
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
