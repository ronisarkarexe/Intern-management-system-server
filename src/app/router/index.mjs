import express from 'express';
import { InternRouters } from '../modules/intern/intern.router.mjs';
import { AdminRouters } from '../modules/admin/admin.router.mjs';
import { DepartmentRouters } from '../modules/department/department.router.mjs';
import { AuthRouters } from '../modules/auth/auth.router.mjs';
import { ProfileRouters } from '../modules/profile/profile.router.mjs';
import { LeaveRouters } from '../modules/leave/leave.router.mjs';
import { TaskRouters } from '../modules/task/task.router.mjs';
import { CertificateRouters } from '../modules/certificate/certificate.router.mjs';
import { EventRouters } from '../modules/event/event.router.mjs';
import { SalaryRouters } from '../modules/salary/salary.router.mjs';

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
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/view-profile',
    route: ProfileRouters,
  },
  {
    path: '/intern-leave',
    route: LeaveRouters,
  },
  {
    path: '/task',
    route: TaskRouters,
  },
  {
    path: '/certificate',
    route: CertificateRouters,
  },
  {
    path: '/event',
    route: EventRouters,
  },
  {
    path: '/salary',
    route: SalaryRouters,
  },
];

routerModule.forEach((route) => router.use(route.path, route.route));
export default router;
