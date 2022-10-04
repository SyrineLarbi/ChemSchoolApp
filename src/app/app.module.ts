import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInAdminComponent } from './AdminLayout/log-in-admin/log-in-admin.component';
import { AddTeacherComponent } from './AdminLayout/Teacher/add-teacher/add-teacher.component';
import { TeacherDashboardComponent } from './AdminLayout/Teacher/teacher-dashboard/teacher-dashboard.component';
import { EditTeacherComponent } from './AdminLayout/Teacher/edit-teacher/edit-teacher.component';
import { ViewTeacherComponent } from './AdminLayout/Teacher/view-teacher/view-teacher.component';
import { ManageTeacherComponent } from './AdminLayout/Teacher/manage-teacher/manage-teacher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddUsersComponent } from './SuperAdminLayout/add-users/add-users.component';
import { ManageUsersComponent } from './SuperAdminLayout/manage-users/manage-users.component';
import { SuperAdminDashboardComponent } from './SuperAdminLayout/super-admin-dashboard/super-admin-dashboard.component';
import { EditUserComponent } from './SuperAdminLayout/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    LogInAdminComponent,
    AddTeacherComponent,
    TeacherDashboardComponent,
    EditTeacherComponent,
    ViewTeacherComponent,
    ManageTeacherComponent,
    AddUsersComponent,
    ManageUsersComponent,
    SuperAdminDashboardComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
