<h1 align="center">an-*LazyLoadImage</h1>
<h3 align="center">@andres.oshiro/ng-lazy-load-image</h1>

<p align="center">
  <br>
    <i>a lightweight lazyload library for Angular</i>
  <br>
</p>

<p align="center">
  <a href="https://andres-oshiro-ng-libraries.an.r.appspot.com"><strong>www.an-nglibraries.com</strong></a>
  <br>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
![npm](https://img.shields.io/npm/dw/@andres-oshiro/ng-lazy-load-image.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![CircleCI](https://circleci.com/gh/andre-oshiro/angular-libraries.svg?style=shield)](https://circleci.com/gh/circleci/circleci-docs/tree/teesloane-patch-5)</div>

## Demo

Visit the [demo page](https://andres-oshiro-ng-libraries.an.r.appspot.com/lazy-image).

## Source code

Github [repository](https://github.com/andre-oshiro/angular-libraries/tree/develop/projects/lazy-load-image).

## Installation

```sh
npm install @andres-oshiro/ng-lazy-load-image
```

## Usage

#### sample html

```html
<div id="root">
  ...

  <img anLazyLoadImage [lazyLoadOptions]="LAZYLOAD_OPTIONS" [imgSrc]="${imgSrc}" />
</div>
```

#### sample component

```ts
@Component(...)
export class SampleComponent {
  public readonly LAZYLOAD_OPTIONS: LazyLoadOptions = {
    onErrorImgSrc: this.errorImageSrc,
    root: this.document.querySelector('#root'),
    rootMargin: '0px 0px 0px 0px',
    threshold: [0.5],
    hasFadeInEffect: true
  };
}
```

## To support old browsers

**"anLazyLoadImage"** uses IntersectionObserver internally. <br />
To support old browsers you will need to install IntersectionObserver polyfill and import it at `polyfill.ts`

```sh
npm install intersection-observer
```

---

## Consider...

If your project only needs to support the latest version of Chrome, maybe you can use the browser's native lazy loading.
