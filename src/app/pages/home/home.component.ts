import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MySkillsComponent } from '../../components/my-skills/my-skills.component';
import { MyProyectsComponent } from '../../components/my-proyects/my-proyects.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { AboutUsComponent } from "../../components/about-us/about-us.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MySkillsComponent,
    MyProyectsComponent,
    FooterComponent,
    AboutUsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
