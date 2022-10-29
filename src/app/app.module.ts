import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInAdminComponent } from './LogIn_Out/log-in-admin/log-in-admin.component';
import { AddTeacherComponent } from './AdminLayout/Teacher/add-teacher/add-teacher.component';
import { TeacherDashboardComponent } from './AdminLayout/Teacher/teacher-dashboard/teacher-dashboard.component';
import { EditTeacherComponent } from './AdminLayout/Teacher/edit-teacher/edit-teacher.component';
import { ViewTeacherComponent } from './AdminLayout/Teacher/view-teacher/view-teacher.component';
import { ManageTeacherComponent } from './AdminLayout/Teacher/manage-teacher/manage-teacher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManageUsersComponent } from './SuperAdminLayout/manage-users/manage-users.component';
import { SuperAdminDashboardComponent } from './SuperAdminLayout/super-admin-dashboard/super-admin-dashboard.component';
import { EditUserComponent } from './SuperAdminLayout/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddCourseComponent } from './AdminLayout/Courses/add-course/add-course.component';
import { LogOutComponent } from './LogIn_Out/log-out/log-out.component';
import { AdminDashboardComponent } from './AdminLayout/admin-dashboard/admin-dashboard.component';
import { HomeTeacherComponent } from './UserLayout/TeacherProfile/home-teacher/home-teacher.component';
import { StudentsHomeComponent } from './UserLayout/StudentProfile/students-home/students-home.component';
import { ToDoListTeacherComponent } from './UserLayout/TeacherProfile/to-do-list-teacher/to-do-list-teacher.component';
import { NotesComponent } from './UserLayout/TeacherProfile/notes/notes.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditNoteComponent } from './UserLayout/TeacherProfile/edit-note/edit-note.component';
import { AddExamComponent } from './UserLayout/TeacherProfile/Exams/add-exam/add-exam.component';
import { ViewExamsComponent } from './UserLayout/TeacherProfile/Exams/view-exams/view-exams.component';
import { ViewCoursesComponent } from './AdminLayout/Courses/view-courses/view-courses.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CoursesDashboardComponent } from './AdminLayout/Courses/courses-dashboard/courses-dashboard.component';
import { AddStudentComponent } from './AdminLayout/Students/add-student/add-student.component';
import { ManageStudentsComponent } from './AdminLayout/Students/manage-students/manage-students.component';
import { StudentDashboardComponent } from './AdminLayout/Students/student-dashboard/student-dashboard.component';
import { NoteStudentsComponent } from './UserLayout/StudentProfile/note-students/note-students.component';
import { ToDoListStudentComponent } from './UserLayout/StudentProfile/to-do-list-student/to-do-list-student.component';
import { AddUserComponent } from './LogIn_Out/SignUp/add-user/add-user.component';
import { GuestHomeComponent } from './LogIn_Out/SignUp/guest-home/guest-home.component';
@NgModule({
  declarations: [
    AppComponent,
    LogInAdminComponent,
    AddTeacherComponent,
    TeacherDashboardComponent,
    EditTeacherComponent,
    ViewTeacherComponent,
    ManageTeacherComponent,
    ManageUsersComponent,
    SuperAdminDashboardComponent,
    EditUserComponent,
    AddCourseComponent,
    LogOutComponent,
    AdminDashboardComponent,
    HomeTeacherComponent,
    StudentsHomeComponent,
    ToDoListTeacherComponent,
    NotesComponent,
    EditNoteComponent,
    AddExamComponent,
    ViewExamsComponent,
    ViewCoursesComponent,
    CoursesDashboardComponent,
    AddStudentComponent,
    ManageStudentsComponent,
    StudentDashboardComponent,
    NoteStudentsComponent,
    ToDoListStudentComponent,
    AddUserComponent,
    GuestHomeComponent,
    
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
    NgxPaginationModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
