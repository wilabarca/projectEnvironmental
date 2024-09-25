import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { NavarComponent } from "../../components/navar/navar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-solutions',
  standalone: true,
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'] 
  ,
  imports: [HeaderComponent, NavarComponent, FooterComponent]
})
export class SolutionsComponent { }
