import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./student-management/dashboard/dashboard.component";
import { HeaderComponent } from "./student-management/header/header.component";
import { AcademicsComponent } from "./student-management/academics/academics.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meta-campus';
}
