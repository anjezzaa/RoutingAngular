import { Routes  } from "@angular/router"

import { routes as userRoutes} from './users/users.routes';
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";

import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";


export const routes: Routes = [
    {
        path: '', //<your-domain>/
        component: NoTaskComponent,
        // redirectTo: '/users/u1',
        // pathMatch: 'full',
    },
    {
        path: 'users/:userId', //<your-domain>/users/<uid>
        component: UserTasksComponent,
        children: userRoutes,

    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];