import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  isClicked: boolean = false;

  onElementClick() {
    this.isClicked = !this.isClicked;
  }

  scrollToBottomAyuda() {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const menu = document.querySelector('.cont') as HTMLElement;
    if (menu) {
      const scrollThreshold = window.innerHeight >= 1080 ? 900 : 600;
      if (window.scrollY > scrollThreshold) {
        menu.classList.add('scrolled');
      } else {
        menu.classList.remove('scrolled');
      }
    }
  }

  scrollToTop() {
    const scrollDuration = 300;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  scrollToPortfolio() {
    const scrollDuration = 300;
    const scrollStep = document.querySelector('.portfolio')!.getBoundingClientRect().top / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
      if (document.querySelector('.portfolio')!.getBoundingClientRect().top > 70) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  scrollToFooter(){
    const footer = document.querySelector('footer');
    if (footer) {
      const scrollDuration = 400;
      const start = window.pageYOffset;
      const end = footer.getBoundingClientRect().top + start;
      const change = end - start;
      const startTime = performance.now();

      function animateScroll(currentTime: number) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / scrollDuration, 1);
        window.scrollTo(0, start + change * progress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      }

      requestAnimationFrame(animateScroll);
    }
  }
}
