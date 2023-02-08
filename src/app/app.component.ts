import { Component, ViewChildren, QueryList, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChildren('section') sections: QueryList<ElementRef> | undefined;

  images = [
    `https://images.unsplash.com/photo-1638870413179-50cb2a978e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=2040&q=100؟${Date.now()}`,
    `https://images.unsplash.com/photo-1631023099977-d1f2b909e6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=2040&q=100؟${Date.now()}`,
    `https://images.unsplash.com/photo-1638858656199-a40a242c5675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=2040&q=100؟${Date.now()}`,
    `https://images.unsplash.com/photo-1660169377717-a7a2f84c6737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=2040&q=100؟${Date.now()}`,
    `https://images.unsplash.com/photo-1660169376132-409f66fedcee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=2040&q=100؟${Date.now()}`,
  ];
  thumb_images = [
    `https://images.unsplash.com/photo-1638870413179-50cb2a978e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=100&q=50؟${Date.now()}`,
    `https://images.unsplash.com/photo-1631023099977-d1f2b909e6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=100&q=50؟${Date.now()}`,
    `https://images.unsplash.com/photo-1638858656199-a40a242c5675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=100&q=50؟${Date.now()}`,
    `https://images.unsplash.com/photo-1660169377717-a7a2f84c6737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=100&q=50؟${Date.now()}`,
    `https://images.unsplash.com/photo-1660169376132-409f66fedcee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=100&q=50؟${Date.now()}`,
  ];

  getButtonColor(even: boolean) {
    return even ? 'primary' : 'accent';
  }

  scrollNextSectionIntoView(currentIndex: number) {
    const nextSection = this.findNextSection(currentIndex);
    this.scrollElIntoView(nextSection);
  }

  hasNextSection(currentIndex: number) {
    return currentIndex < this.images.length - 1;
  }

  private findNextSection(currentIndex: number): HTMLElement {
    const nextIndex = currentIndex + 1;
    const sectionNativeEls = this.getSectionsNativeElements();
    return sectionNativeEls && sectionNativeEls[nextIndex];
  }

  private getSectionsNativeElements() {
    return this.sections && this.sections.toArray().map((el) => el.nativeElement);
  }

  private scrollElIntoView(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

}
