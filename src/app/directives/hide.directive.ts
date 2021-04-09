import {
  Directive,
  ElementRef,
  Input
} from '@angular/core';
import * as EventEmitter from 'node:events';

@Directive({
  selector: '[hide]',
})
export class HideDirective {
  el: ElementRef;
  _hide = false;

  @Input() set hide(status: boolean) {
    this._hide = status;
    this.hideElement();
  }

  constructor(el: ElementRef) {
    this.el = el;
    this.hideElement();
  }

  private hideElement() {
    this.el.nativeElement.style.display = this._hide ? 'none' : 'block';
  }
}
