import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  showDiv: boolean = false;

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  // metodo para llevar al siguiente link https://wa.me/5493382504243
  goToWhatsapp(link: string) {
    window.open(link, '_blank');
  }

}
