<h1 align="center">an-*ngLibraries</h1>
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

## Installation

```sh
npm i @andres-oshiro/ng-lazy-load-image
```

## Usage

```html
<img anLazyLoadImage [imgSrc]="${imgUrl}" />
```

### Options

You can pass as option a **root element**, **root margin** and **threshold**.

#### sample-list.component.html

```html
<div id="root">
  ...

  <img anLazyLoadImage [lazyLoadOptions]="OPTIONS" [imgSrc]="${imgUrl}" />
</div>
```

#### sample-list-component.ts

```ts
@Component(...)
export class SampleListComponent {
  public readonly OPTIONS: LazyLoadOptions = {
    onErrorImgSrc: this.errorImageSrc,
    root: this.document.querySelector('#root'),
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
  };
}
```

## Old Browser

To support old browsers you will need to install an intersection observer polyfill.

```sh
npm install intersection-observer
```

After install, import it at polyfill.ts

```ts
/**********************************************************
 * APPLICATION IMPORTS
 */

import 'intersection-observer';
```

## \*

If your project only needs to support the latest version of Chrome, you can use the browser's native lazy loading.
