import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './SuperAdminLayout/add-users/add-users.component';
import { LogInAdminComponent } from './LogIn_Out/log-in-admin/log-in-admin.component';
import { ManageUsersComponent } from './SuperAdminLayout/manage-users/manage-users.component';
import { TeacherDashboardComponent } from './AdminLayout/Teacher/teacher-dashboard/teacher-dashboard.component';
import { EditUserComponent } from './SuperAdminLayout/edit-user/edit-user.component';
import { SuperAdminDashboardComponent } from './SuperAdminLayout/super-admin-dashboard/super-admin-dashboard.component';
import { AddTeacherComponent } from './AdminLayout/Teacher/add-teacher/add-teacher.component';
import { ManageTeacherComponent } from './AdminLayout/Teacher/manage-teacher/manage-teacher.component';
import { ViewTeacherComponent } from './AdminLayout/Teacher/view-teacher/view-teacher.component';
import { AddCourseComponent } from './AdminLayout/Courses/add-course/add-course.component';
import { LogOutComponent } from './LogIn_Out/log-out/log-out.component';
import { EditTeacherComponent } from './AdminLayout/Teacher/edit-teacher/edit-teacher.component';
import { AdminDashboardComponent } from './AdminLayout/admin-dashboard/admin-dashboard.component';
import { HomeTeacherComponent } from './UserLayout/TeacherProfile/home-teacher/home-teacher.component';
import { StudentsHomeComponent } from './UserLayout/StudentProfile/students-home/students-home.component';
const routes: Routes = [
  {path:"addusers",component:AddUsersComponent},
  {path:"Teacher",component:TeacherDashboardComponent},
  {path:"ViewUsers",component:ManageUsersComponent},
  {path:"",component:LogInAdminComponent},
  {path:'manageUser',component:ManageUsersComponent},
  {path:'editUser/:_id', component:EditUserComponent},
  {path:'Dashboard',component:SuperAdminDashboardComponent},
  {path:"addTeacher",component:AddTeacherComponent},
  {path:"ManageTeacher",component:ManageTeacherComponent},
  {path:"viewTeacher",component:ViewTeacherComponent},
  {path:"addcourses",component:AddCourseComponent},
  {path:"LogOut",component:LogOutComponent},
  {path:"edit/:_id",component:EditTeacherComponent},
  {path:"AdminDashboard",component:AdminDashboardComponent},
  {path:"TeacherHome",component:HomeTeacherComponent},
  {path:"StudentsHome",component:StudentsHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
