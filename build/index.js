"use strict";
//this equals below syntax
// class Sorter {
//   collection: number[];
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
var Sorter = /** @class */ (function () {
    // public makes the declaration as well
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var _a;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    _a = [
                        this.collection[j + 1],
                        this.collection[j],
                    ], this.collection[j] = _a[0], this.collection[j + 1] = _a[1];
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 4, -5, 0]);
sorter.sort();
console.log(sorter.collection);
