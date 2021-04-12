import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { LazyLoadOptions } from './lazy-load-image.model';

/**
 * LAZY LOAD IMAGE
 *
 * @export
 * @class LazyLoadImageDirective
 * @implements {OnInit}
 */
@Directive({
  selector: 'img[anLazyLoadImage]'
})
export class LazyLoadImageDirective implements OnInit, OnDestroy {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementRef.nativeElement.style.opacity = this.INITIAL_IMAGE_OPACITY;
  }
  /** CONSTANT: Default image on error */
  private readonly DEFAULT_ERROR_IMG_BASE64 = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`;
  /** CONSTANT: DOpacity for fade in when image load */
  private readonly INITIAL_IMAGE_OPACITY = '0.1';
  /** VARIABLE: Observer for an img element */
  private intersectionObserver: IntersectionObserver = <IntersectionObserver>{};
  /** VARIABLE: Image on error */
  private onErrorImgSrc: string = this.DEFAULT_ERROR_IMG_BASE64;
  /** INPUT: Options for LazyLoad */
  @Input() public lazyLoadOptions?: LazyLoadOptions;
  /** INPUT: Source of the image element */
  @Input() public imgSrc = '';
  /** HOST LISTENER: On Error */
  @HostListener('error') public error(): void {
    this.onError();
  }
  /** HOST LISTENER: On Loaded */
  @HostListener('load') public load(): void {
    this.onLoad();
  }

  /**
   * ANGULAR LIFECYCLE: Init
   */
  public ngOnInit(): void {
    this.startObservingLazyLoadImages();
  }

  /**
   * ANGULAR LIFECYCLE: Destroy
   */
  public ngOnDestroy(): void {
    this.intersectionObserver.disconnect();
  }

  /**
   * DIRECTIVE: Start Observing the image element
   */
  private startObservingLazyLoadImages(): void {
    const element = this.elementRef.nativeElement;
    this.intersectionObserver = this.getIntersectionObserver(element);
    this.intersectionObserver.observe(element);
  }

  /**
   * DIRECTIVE: Get an Observer for image element
   */
  private getIntersectionObserver(
    element: HTMLImageElement
  ): IntersectionObserver {
    const observingElementProcess = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      this.observingElementProcess(element, entries, observer);
    };
    const options = {
      ...this.lazyLoadOptions
    };
    return new IntersectionObserver(observingElementProcess, options);
  }

  /**
   * DIRECTIVE: Process of Observing element
   */
  private observingElementProcess(
    element: HTMLImageElement,
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void {
    for (const entry of entries) {
      if (!entry?.isIntersecting) {
        return;
      }
      this.renderer.setAttribute(element, 'src', this.imgSrc);
      observer.unobserve(element);
    }
  }

  /**
   * DIRECTIVE: Fade in effect for loaded image
   */
  private imageFadeIn(): void {
    const element = this.elementRef.nativeElement;
    let opacity = Number(this.INITIAL_IMAGE_OPACITY);
    const intervalTimer = setInterval(() => {
      if (Number(opacity) >= 1) {
        clearInterval(intervalTimer);
      }
      element.style.opacity = String(opacity);
      element.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
      opacity += opacity * 0.1;
    }, 10);
  }

  /**
   * DIRECTIVE: On Loaded
   */
  private onLoad(): void {
    this.imageFadeIn();
  }

  /**
   * DIRECTIVE: On Error
   */
  private onError(): void {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'src',
      this.onErrorImgSrc
    );
  }
}
