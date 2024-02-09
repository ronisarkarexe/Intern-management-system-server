import express from 'express';
import { InternRouters } from '../modules/intern/intern.router.mjs';
import { AdminRouters } from '../modules/admin/admin.router.mjs';
import { DepartmentRouters } from '../modules/department/department.router.mjs';
import { TaskRouters } from '../modules/task/task.router.mjs';
const router = express.Router();

const routerModule = [
  {
    path: '/admin',
    route: AdminRouters,
  },
  {
    path: '/intern',
    route: InternRouters,
  },
  {
    path: '/department',
    route: DepartmentRouters,
  },
  {
    path: '/task',
    route: TaskRouters,
  },
];

routerModule.forEach((route) => router.use(route.path, route.route));
export default router;
