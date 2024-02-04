const express = require("express");
const router = express.Router();

const AdminRouter = require("../modules/admin/admin.router");
const InternRouter = require("../modules/intern/intern.router");

const routerModule = [
  {
    path: "/admin",
    route: AdminRouter,
  },
  {
    path: "/intern",
    route: InternRouter,
  },
];

routerModule.forEach((route) => router.use(route.path, route.route));
module.exports = router;
