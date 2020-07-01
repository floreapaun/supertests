import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector : '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private el:ElementRef, private render: Renderer2) { 
    this.changeBgColor('red');
  }
  @HostBinding('style.border') border: string;
  @HostListener('mouseover') onmouseover(){
    this.changeBgColor('green');
    this.border = "4px solid blue"; 
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.changeBgColor('black');
  }

  changeBgColor(color:string):void{
    //this.render.setElementStyle(this.el.nativeElement,'color',color);
  }

}
