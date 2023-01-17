import { Directive, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeaderDirective implements OnInit {

  @Input('toolbar1') toolbar1: any;
  @Input('toolbar2') toolbar2: any;
  private lastY = 110;

  constructor(
    private render: Renderer2, private domCrtl: DomController,
  ) {
  }

  ngOnInit() {
    this.toolbar1 = this.toolbar1.el;
    this.toolbar2 = this.toolbar2.el;
    // this.domCrtl.write(() => {
    //   this.render.setStyle(this.toolbar2, 'transition', 'margin-top 400ms');
    // });
  }

  onContentScroll(event) {
    // if (event.detail.scrollTop > this.lastY) {
    //   this.domCrtl.write(() => {
    //     this.render.addClass(this.toolbar1, 'toolbarH1Final');
    //     this.render.addClass(this.toolbar2, 'toolbarH2Final');
    //     this.render.setStyle(this.toolbar2, 'margin-top', `-${this.toolbar2.clientHeight}px`);
    //   });
    // } else {
    //   this.domCrtl.write(() => {
    //     this.render.removeClass(this.toolbar1, 'toolbarH1Final');
    //     this.render.removeClass(this.toolbar2, 'toolbarH2Final');
    //     this.render.setStyle(this.toolbar2, 'margin-top', '0px');
    //   });
    // }
  }
}
