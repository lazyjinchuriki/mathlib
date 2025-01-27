# mathlib-n

mathlib-n is a Node.js library that provides a collection of mathematical functions and utilities for common mathematical operations. It is designed to be easy to use and lightweight, making it a valuable addition to your Node.js projects when you need mathematical computations.

## version

[Github](https://github.com/marufHasan24/mathlib.git) : letest and unstable version

npm : 4.0.31-beta (stable version and recommended)

**mathlib-n** is a math library
which can solve our simple and day to day lifes problem. like :

- A number is **odd**, **prime** etc or not.
- **Memories** data as an **array** or a number by , **dememorise** (getting memoriesed data) and **delete** unexpected memory by its user name.
- Solve a **quadratic** equation ( ax<sup>2</sup> + bx + c = 0 ) or a **linear** equation ( ax + by = c , a<sub>2</sub>x + b<sub>2</sub>y = c<sub>2</sub>)
- Mesurementing area, length, angle etc. of any shape by their Vertex point only.
- 23 esential constants

like those features, it has more than 100 features and constants (including built-in Math object).

## Installation

You can install mathlib-n using npm or yarn:

```bash
npm install mathlib-n
```

or

```bash
yarn add mathlib-n
```

or

```bash
bower install mathlib-n
```

## Usage

Once you have mathlib-n installed, you can use it in your Node.js project as follows:

```javascript
// Import the mathlib-n module
const mathlib = require("mathlib-n");

// Example usage of mathlib-n functions
const sum = mathlib.add(5, 3); // Returns 8
const product = mathlib.mul(4, 2); // Returns 8
const difference = mathlib.sub(5, 3); // Returns 2
const quotient = mathlib.div(4, 2); // Returns 2

// You can use other functions from mathlib-n as well
```

Available Functions
Here are some of the functions provided by mathlib-n:

- `fact(n)`: Calculates the factorial of a number.
- `linearEq(a, b, x)`: Solves a linear equation ax + b = 0 for x.
- `age(birthYear,birthMonth,birthdate,[arry of date(defult is current date)])`: Calculates the age based on the birth year.
- `qudrt(a, b, c)`: Solves a quadratic equation ax^2 + bx + c = 0 for x.
- `avg(numbers)`: Calculates the average of an array of numbers.
- `logx(base, value)`: Calculates the logarithm of a value with a specified base.
- `rootx(base, value)`: Calculates the root of a value with a specified base.
- `fract(numerator, denominator)`: Returns the fractional representation of a number.
- `mathlib`: A utility object containing mathematical constants and helper functions.
- `Vector`: A class for working with vectors.
- `Matrix`: A class for working with matrices.
- `length`: returns the length of Mathlib object.
- `info`: Displays information about the library.
- `add(a, b[,more])`: Adds two or more numbers.
- `mul(a, b[,more])`: Multiplies two or more numbers.
- `sub(a, b[,more])`: Subtracts two or more numbers.
- `div(a, b[,more])`: Divides two or more numbers etc.

Likely it has more than 130 functions and constants.
You can find more details about these functions and their usage in the API documentation.

## API Documentation

For a comprehensive list of available functions and their detailed usage information [here](https://marufhasan24.github.io/mathlib_wiki/wiki.html)

## Examples

We have provided a collection of usage examples in the test folder. You can run these examples using the following command:

```bash
npm run examples --prefix node_modules/mathlib-n
```

## License

mathlib-n is licensed under the MIT License. See the LICENSE file for details.

## Support and Contact

For questions, bug reports, feature requests, or general assistance, you can contact me at <gamerid703@gmail.com> or place an issue on GitHub repository.

## Troubleshooting

### fix memory

**Be sure that, you don't use any synchronise loop like for or while loop with asynchronous memo()**.
if you use that, the memory will ruined. Then you should do this work :

```ps
npm run fix-memo --prefix node_modules/mathlib-n
```

there will be an animation of `MathLib` ,but you can skip it by pressing `ctrl + c` for windows and `cmd + c` for mac. But if you continue with the animation you can know the current mode and status and you can also know about your records and trushes.

### change or intalige mode

Two mode are available now on mathlib-n. They are science and fix mode. `sci` for science and `fix` for fix mode. and status is the count of how many number will be after decimal.

```ps
npm run modechanger --prefix node_modules/mathlib-n
```

or you can chance mode via code

```javascript
const mathlib = require("mathlib-n");
mathlib.getmode(); // to know the current mode
mathlib.setmode("fix", 2); // 2 is the status
```

There will be an animation of `MathLib` ,but you can skip it by pressing `ctrl + c` for windows and `cmd + c` for mac. But if you continue with the animation you can know the current mode and status and you can also know about your records and trushes.

[History](https://marufhasan24.github.io/mathlib_wiki2/index.html#changeLog)

## Keywords

- math
- mathlib-n
- mathLib
- math library
- mathlib
- mathlibjs
- mathjs

## documentation

[Documentation](https://marufhasan24.github.io/mathlib_wiki2/wiki.html)

**A little description** :

- `math.length` : It will give you the length of math object.
- `math.mathlib()` : It's a fun function. There is no such important work it done. It's just a terminal animation. But it will give you some important information about your calculation mode and your saved,restored and trushed files number at the end.
- `math.recList` : return an array of record's files name.

## Licence

MIT

## History

Current version : 4.0.31-beta

[History](https://marufhasan24.github.io/mathlib_wiki/history.html)
