import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[app-dropdown]',
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) {}
  @HostBinding('class.open') dropDownClass: boolean = false;

//   @HostListener('click') toggleOpen(eventData: Event) {
//     this.dropDownClass = !this.dropDownClass;
//   }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      console.log(event.target);
      console.log(this.elRef.nativeElement);
    this.dropDownClass = this.elRef.nativeElement.contains(event.target)
      ? !this.dropDownClass
      : false;
  }
}
