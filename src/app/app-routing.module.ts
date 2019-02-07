import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './guards';
import { EmployeeListComponent } from './employee-list';

 const appRoutes: Routes = [
    { path: '', component: EmployeeListComponent,canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent },
    { path: 'view-emp', component:EmployeeComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);