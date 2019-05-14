import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core'

@Directive({
    selector: '[appDropdown]',
    exportAs:'appDropDown'
})
export class DropdownDirective{
    @HostBinding('class.show') isOpen = false;
    
    constructor(private _el: ElementRef) { }

    @HostListener('click') toggle(){
        this.isOpen = !this.isOpen;
        this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
    }
}
