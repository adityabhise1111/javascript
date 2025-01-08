
/**
 * The following code demonstrates different types of iterations in JavaScript:
 * 
 * | Iteration Type | Applicable To            | Usage Example                                      | Access Example                    |
 * |----------------|--------------------------|----------------------------------------------------|-----------------------------------|
 * | for...in       | Objects, Arrays          | for (const key in myObject) { ... }                | key, myObject[key]                |
 * | for...of       | Arrays, Maps, Strings    | for (const value of programming) { ... }           | value                             |
 * | forEach        | Arrays, Maps, Sets       | programming.forEach(value => { ... })              | value                             |
 * | for            | Arrays                   | for (let i = 0; i < programming.length; i++) { ... }| programming[i]                    |
 * 
 * Note:
 * - `for...in` iterates over enumerable properties of an object or array.
 * - `for...of` iterates over iterable objects like arrays, maps, and strings.
 * - `forEach` is an array method that executes a provided function once for each array element.
 * - `for` loop is a traditional loop that can be used for iterating over arrays.
 */
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}


