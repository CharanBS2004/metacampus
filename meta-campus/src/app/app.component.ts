import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { HeaderComponent } from "./student-management/header/header.component";
import { AcademicsComponent } from "./student-management/academics/academics.component";

// import { HeaderComponent } from './admin1/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meta-campus';
}
