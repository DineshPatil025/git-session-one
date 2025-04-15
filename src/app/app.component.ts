import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevOneCompComponent } from "../components/dev-one-comp/dev-one-comp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DevOneCompComponent, DevOneCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'git-session-one';
}
