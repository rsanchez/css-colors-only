# CSS Colors Only

Command line to remove all rules except those which contain one or more colors.

This tool is useful if you are re-skinning a site with a new color scheme and need a starting point for a new stylesheet.

```css
.foo {
  color: red;
  border: 1px solid #ab560f;
  font-size: 16px;
  background-image: linear-gradient(to-bottom, red, blue);
}

.bar {
  color: rgba(0, 128, 255, 0.5);
}

.baz {
  display: block;
}
```

```css
.foo {
  color: red;
  border-color: #ab560f;
  background-image: linear-gradient(to-bottom, red, blue);
}

.bar {
  color: rgba(0, 128, 255, 0.5);
}
```

This tool will remove any CSS rules that do not contain a color (named, hex, rgb, rgba, hsl, or hsla) value. It looks at the following CSS properties for colors:

* `color`
* `background`
* `background-color`
* `background-image`
* `border`
* `border-top`
* `border-right`
* `border-bottom`
* `border-left`
* `border-color`
* `border-top-color`
* `border-right-color`
* `border-bottom-color`
* `border-left-color`
* `outline`
* `outline-color`
* `text-shadow`
* `box-shadow`

The following CSS properties will be transformed, leaving only the color part of the declaration:

* `background` → `background-color`
* `border` → `border-color`
* `border-top` → `border-top-color`
* `border-right` → `border-right-color`
* `border-bottom` → `border-bottom-color`
* `border-left` → `border-left-color`
* `outline` → `outline-color`

## Installation

[![NPM version](https://badge.fury.io/js/css-colors-only.svg)](https://www.npmjs.org/package/css-colors-only)

[Use npm](https://www.npmjs.org/doc/cli/npm-install.html).

```
npm install -g css-colors-only
```

## Usage

```
css-colors-only input.css output.css
```

Use the `--without-grey` or `--without-monochrome` flag(s):

```
css-colors-only input.css output.css --without-grey
```

Print directly to stdout:

```
css-colors-only input.css
```

## License

Copyright (c) 2015 [Rob Sanchez](https://github.com/rsanchez)

Licensed under [the MIT License](./LICENSE).
