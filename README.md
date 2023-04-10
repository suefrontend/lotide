# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @kayanooyama/lotide`

**Require it:**

`const _ = require('@kayanooyama/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(actual, expected)`: Take in two arrays and console.log an appropriate message to the console.
- `assertEqual(actual, expected)`: Compare the two values it takes in and print out a message telling us if they match or not.
- `assertObjectsEqual(actual, expected)`: Take in two objects and console.log an appropriate message to the console.
- `countLetters(str)`: Return a count of each of the letters in that sentence.
- `countOnly(allItems, itemsToCount)`: Take in a collection of items and return counts for a specific subset of those items.
- `eqArrays(array1, array2)`: Takes in two arrays and returns true or false, based on a perfect match.
- `eqObject(object1, object2)`: Take in two objects and returns true or false, based on a perfect match.
- `findKey(object, callback)`: Return the first key for which the callback returns a truthy value.
- `findKeyByValue(object, key)`: Return the first key which contains the given value.
- `flatten(array)`: Return a "flattened" version of the array.
- `head(array, str)`: Returns the first item in the array.
- `letterPositions(sentence)`: Return all the indices (zero-based positions) in the string where each character is found.
- `map(array)`: Creates a new array populated with the results of calling a provided function on every element in the calling array.
- `middle(array)`: Return the middle-most element(s) of the given array.
- `tail(array)`: Returns everything except for the first item of the provided array.
- `takeUntil(array, callback)`: Keep collecting items from a provided array until the callback provided returns a truthy value.
- `without(source, itemsToRemove)`: Return a subset of a given array, removing unwanted elements.
