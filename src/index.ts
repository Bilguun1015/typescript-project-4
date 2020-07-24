//this equals below syntax
// class Sorter {
//   collection: number[];
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
class Sorter {
  // public makes the declaration as well
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // All of this only works if collection is number[]
        // If collection is an array of numbers
        //setting up type guard
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            [this.collection[j], this.collection[j + 1]] = [
              this.collection[j + 1],
              this.collection[j],
            ];
          }
        }
        // Only going to work if collection is a string
        // If collection is a string, do this logic instead:
        // ~~~logic to compare and swap characters in a string
        if (typeof this.collection === 'string') {
          this.collection;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 4, -5, 0]);
sorter.sort();
console.log(sorter.collection);
