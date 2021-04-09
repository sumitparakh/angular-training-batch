import {
  Directive,
  ElementRef,
  Input
} from '@angular/core';

@Directive({
  selector: '[atbHighlight]',
})
export class HighlightDirective {
  color = 'orange';
  element: ElementRef;

  @Input() set _color(c: string) {
    this.color = c;
  }

  @Input() set _title(title: string) {
    this.element.nativeElement.title = title + '::Intelliswift';
  }

  @Input() set atbHighlight(color: string) {
    /**
     * Assign any color to root color object otherwise keep it orange(default color)
     */
    if(color) {
      this.color = color;
    }
    // this.color = color || this.color; // orange ==> empty
    this.highlight();
  }

  constructor(el: ElementRef) {
    this.element = el;
    this.highlight();
  }

  highlight() {
    this.element.nativeElement.style.color = this.color;
    console.log('Directive Code', this.color);
  }
}
