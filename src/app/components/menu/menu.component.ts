import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  isClicked = false;
  private ticking = false;

  onElementClick() { this.isClicked = !this.isClicked; }

  ngOnInit() { window.addEventListener('scroll', this.onScroll, { passive: true }); }
  ngOnDestroy() { window.removeEventListener('scroll', this.onScroll); }

  /* ---------- Optimized scroll listener ---------- */
  private onScroll = () => {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.updateMenuScrolledState();
      this.ticking = false;
    });
  }

  private updateMenuScrolledState() {
    const menu = document.querySelector('.cont') as HTMLElement | null;
    if (!menu) return;
    const threshold = window.innerHeight >= 1080 ? 900 : 600;
    menu.classList.toggle('scrolled', window.scrollY > threshold);
  }

  /* ---------- Generic smooth scroller ---------- */
  private easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  private scrollToTarget(target: Element | number | null, duration = 400, offset = 70) {
    const start = window.pageYOffset;
    const to = typeof target === 'number'
      ? target
      : target
        ? (target as Element).getBoundingClientRect().top + start - offset
        : start;

    const change = to - start;
    const startTime = performance.now();

    if (Math.abs(change) < 2) return; // ya en posición

    const step = (now: number) => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const eased = this.easeInOutQuad(elapsed);
      window.scrollTo(0, Math.round(start + change * eased));
      if (elapsed < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  /* ---------- Public helpers para botones ---------- */
  scrollToTop() { this.scrollToTarget(0, 300, 0); }

  scrollToAboutUs() {
    const el = document.querySelector('#sobre-nosotros');
    this.scrollToTarget(el, 400, 70);
  }

  scrollToPortfolio() {
    const el = document.querySelector('.portfolio');
    this.scrollToTarget(el, 350, 70);
  }

  scrollToFooter() {
    const el = document.querySelector('footer');
    this.scrollToTarget(el, 400, 30);
  }
}
