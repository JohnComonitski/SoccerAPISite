import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scrollTo]',
})
export class ScrollToDirective {
  @Input('scrollTo') targetId!: string;

  @HostListener('click')
  onClick(): void {
    const el = document.getElementById(this.targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
