import { Directive, EventEmitter, Output } from '@angular/core';
import { ResizedEvent } from './resized.event';
import * as i0 from "@angular/core";
export class ResizedDirective {
    element;
    zone;
    observer;
    oldRect;
    resized;
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.resized = new EventEmitter();
        this.observer = new ResizeObserver(entries => this.zone.run(() => this.observe(entries)));
    }
    ngOnInit() {
        this.observer.observe(this.element.nativeElement);
    }
    ngOnDestroy() {
        this.observer.disconnect();
    }
    observe(entries) {
        const domSize = entries[0];
        const resizedEvent = new ResizedEvent(domSize.contentRect, this.oldRect);
        this.oldRect = domSize.contentRect;
        this.resized.emit(resizedEvent);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ResizedDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.8", type: ResizedDirective, selector: "[resized]", outputs: { resized: "resized" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: ResizedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[resized]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { resized: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLXJlc2l6ZS1ldmVudC9zcmMvbGliL3Jlc2l6ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUE2QixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUsvQyxNQUFNLE9BQU8sZ0JBQWdCO0lBUVI7SUFDQTtJQVJYLFFBQVEsQ0FBaUI7SUFDekIsT0FBTyxDQUFtQjtJQUdsQixPQUFPLENBQUM7SUFFeEIsWUFDbUIsT0FBbUIsRUFDbkIsSUFBWTtRQURaLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUc3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sT0FBTyxDQUFDLE9BQThCO1FBQzVDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQzt1R0E3QlUsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7OzJGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCO29HQU1pQixPQUFPO3NCQUR0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzaXplZEV2ZW50IH0gZnJvbSAnLi9yZXNpemVkLmV2ZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Jlc2l6ZWRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXNpemVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIG9ic2VydmVyOiBSZXNpemVPYnNlcnZlcjtcbiAgcHJpdmF0ZSBvbGRSZWN0PzogRE9NUmVjdFJlYWRPbmx5O1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgcmVzaXplZDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgem9uZTogTmdab25lXG4gIClcbiAge1xuICAgIHRoaXMucmVzaXplZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplZEV2ZW50PigpO1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMub2JzZXJ2ZShlbnRyaWVzKSkpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudClcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgb2JzZXJ2ZShlbnRyaWVzOiBSZXNpemVPYnNlcnZlckVudHJ5W10pOiB2b2lkIHtcbiAgICBjb25zdCBkb21TaXplID0gZW50cmllc1swXTtcbiAgICBjb25zdCByZXNpemVkRXZlbnQgPSBuZXcgUmVzaXplZEV2ZW50KGRvbVNpemUuY29udGVudFJlY3QsIHRoaXMub2xkUmVjdCk7XG4gICAgdGhpcy5vbGRSZWN0ID0gZG9tU2l6ZS5jb250ZW50UmVjdDtcbiAgICB0aGlzLnJlc2l6ZWQuZW1pdChyZXNpemVkRXZlbnQpO1xuICB9XG59XG5cbiJdfQ==