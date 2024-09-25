import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavarComponent } from './components/navar/navar.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  HeaderComponent, NavarComponent, HomeComponent, FontAwesomeModule, FooterComponent, SolutionsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectEnvironmental';
}
