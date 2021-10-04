import {
    Component,
    ViewChild,
    AfterViewInit,
    ElementRef,
    Input,
    NgZone,
    OnDestroy,
  } from "@angular/core";
  
  @Component({
    selector: 'fx-imagecrop',
    template: `
        <div 
            class="dataratio {{cssClass}}"
            [ngClass]="{
                'panorama': this.div_ratio <= this.img_ratio, 
                'landscape': this.div_ratio > this.img_ratio,
                'h_align_left': hAlign === 'left',
                'h_align_right': hAlign === 'right',
                'v_align_top': vAlign === 'top',
                'v_align_bottom': vAlign === 'bottom',
                'invert': invert
            }"
            #cropWrapper>
            <img src="{{src}}" />
        </div>        
    `,
    styleUrls: ['./image-crop.component.scss']
  })
  export class ImageCropComponent implements AfterViewInit, OnDestroy {
  
    @Input() cssClass = '';
    @Input() src = '';
  
    @Input() vAlign: 'center' | 'top' | 'bottom' = "center";
    @Input() hAlign: 'center' | 'left' | 'right' = "center";
    @Input() invert = false;
  
    img_ratio: number;
    div_ratio: number;
    observer : ResizeObserver;
  
    constructor(
      private zone: NgZone
    ) { 
      this.cropWrapper = undefined;
      this.img_ratio = 1;
      this.div_ratio = 1;
      this.observer = this.observer = new ResizeObserver(entries => {
        this.zone.run(() => {
          this.div_ratio = entries[0].contentRect.height / entries[0].contentRect.width;
        });
      });
    }
  
    @ViewChild('cropWrapper') cropWrapper?: ElementRef;
    ngAfterViewInit() {
      const image = new Image();
      image.onload = (e) => {
        const t: any = e.currentTarget;
        this.img_ratio = t?.height / t?.width;
        this.div_ratio = this.cropWrapper?.nativeElement.offsetHeight / this.cropWrapper?.nativeElement.offsetWidth;
      }
      image.src = this.src;
  
      
      this.observer.observe(this.cropWrapper?.nativeElement);
    }
  
    ngOnDestroy() {
      this.observer.unobserve(this.cropWrapper?.nativeElement);
    }
  
  }
  