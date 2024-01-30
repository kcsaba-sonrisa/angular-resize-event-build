import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ResizedEvent } from './resized.event';
import * as i0 from "@angular/core";
export declare class ResizedDirective implements OnInit, OnDestroy {
    private readonly element;
    private readonly zone;
    private observer;
    private oldRect?;
    readonly resized: EventEmitter<ResizedEvent>;
    constructor(element: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private observe;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResizedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ResizedDirective, "[resized]", never, {}, { "resized": "resized"; }, never, never, false, never>;
}
