import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavarComponent } from "../../components/navar/navar.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
  ,
  imports: [FooterComponent, NavarComponent, HeaderComponent]
})
export class HomeComponent { }
