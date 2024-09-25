import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;

  goToDonatePage() {
    window.open('https://www.un.org/es/about-us/how-to-donate-to-the-un-system', '_blank'); 
  }
}
