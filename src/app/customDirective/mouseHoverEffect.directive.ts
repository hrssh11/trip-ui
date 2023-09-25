import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";



@Directive({
    selector:'[mousehoverstyle]'
})

export  class MouseHoverEffect  {
    
constructor ( private elemRef :ElementRef , private render: Renderer2 ){
}
@HostListener('mouseenter') mouseover(eventData : Event){
    this.render.setStyle(this.elemRef.nativeElement , 'background-color' ,'#dbdbd9')
    this.render.setStyle(this.elemRef.nativeElement , 'color' ,'black')
}
@HostListener('mouseleave') mouseleave(eventData : Event){
    this.render.setStyle(this.elemRef.nativeElement , 'background-color' ,'white')
    this.render.setStyle(this.elemRef.nativeElement , 'color' ,'black')
}
}