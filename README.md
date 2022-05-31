<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isTypedArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [typed array][mdn-typed-array].



<section class="usage">

## Usage

To use in Observable,

```javascript
isTypedArray = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@umd/browser.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isTypedArray;
})();
</script>
```

#### isTypedArray( value )

Tests if a value is a [typed array][mdn-typed-array].

```javascript
var Int8Array = require( '@stdlib/array-int8' );

var bool = isTypedArray( new Int8Array( 10 ) );
// returns true

bool = isTypedArray( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@umd/index.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@umd/index.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@umd/index.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@umd/index.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@umd/index.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@umd/index.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@umd/index.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@umd/index.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/index.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@umd/index.js"></script>
<script type="text/javascript">
(function () {

var arr = new Int8Array( 10 );
var bool = isTypedArray( arr );
// returns true

arr = new Uint8Array( 10 );
bool = isTypedArray( arr );
// returns true

arr = new Uint8ClampedArray( 10 );
bool = isTypedArray( arr );
// returns true

arr = new Int16Array( 10 );
bool = isTypedArray( arr );
// returns true

arr = new Uint16Array( 10 );
bool = isTypedArray( arr );
// returns true

arr = new Int32Array( 10 );
bool = isTypedArray( arr );
// returns true

arr = new Uint32Array( 10 );
bool = isTypedArray( arr );
// returns true

arr = new Float32Array( 10 );
bool = isTypedArray( arr );
// returns true

arr = new Float64Array( 10 );
bool = isTypedArray( arr );
// returns true

bool = isTypedArray( [] );
// returns false

bool = isTypedArray( {} );
// returns false

bool = isTypedArray( null );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-typed-array-like`][@stdlib/assert/is-typed-array-like]</span><span class="delimiter">: </span><span class="description">test if a value is typed-array-like.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-typed-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-typed-array

[test-image]: https://github.com/stdlib-js/assert-is-typed-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-typed-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-typed-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-typed-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-typed-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-typed-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-typed-array/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-typed-array/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-typed-array/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-typed-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-typed-array/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert-is-array/tree/umd

[@stdlib/assert/is-typed-array-like]: https://github.com/stdlib-js/assert-is-typed-array-like/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
