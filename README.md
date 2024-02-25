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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isTypedArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [typed array][mdn-typed-array].



<section class="usage">

## Usage

```javascript
import isTypedArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/assert-is-typed-array/tags). For example,

```javascript
import isTypedArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@v0.2.1-deno/mod.js';
```

#### isTypedArray( value )

Tests if a value is a [typed array][mdn-typed-array].

```javascript
import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@deno/mod.js';

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

```javascript
import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';
import Uint8ClampedArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@deno/mod.js';
import Int16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@deno/mod.js';
import Uint16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@deno/mod.js';
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';
import Uint32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@deno/mod.js';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import isTypedArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@deno/mod.js';

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
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert-is-typed-array-like`][@stdlib/assert/is-typed-array-like]</span><span class="delimiter">: </span><span class="description">test if a value is typed-array-like.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-typed-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-typed-array

[test-image]: https://github.com/stdlib-js/assert-is-typed-array/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/assert-is-typed-array/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-typed-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-typed-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-typed-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-typed-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-typed-array/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-typed-array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-typed-array/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-typed-array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-typed-array/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-typed-array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-typed-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-typed-array/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert-is-array/tree/deno

[@stdlib/assert/is-typed-array-like]: https://github.com/stdlib-js/assert-is-typed-array-like/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
