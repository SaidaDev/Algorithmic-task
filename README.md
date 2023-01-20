# Interview task solution

This code shows 2 methods of reversing the array of characters

```js
// Given
const array = ['c','a','t',' ','d','o','g',' ','a','p','p','l','e',' ','f','i','n','e',' ','f', 'o', 'x']
```
The result should contain the array of characters with reversed words order

```js
// Result
const result = ['f','o','x',' ','f','i','n','e',' ','a','p','p','l','e',' ','d','o','g',' ','c','a','t']
```

First method (`m1`) uses standard JavaScript Api to split and reverse the array

To run first method

```sh
npm run m1
```

Second method (`m2`) uses custom written shift operation to move characters one by one

To run second method

```sh
npm run m2
```
