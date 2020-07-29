/** @format */

var numbers = {
  *[Symbol.iterator]({ start = 0, end = 100, step = 1 } = {}) {
    for (let i = start; i <= end; i += step) {
      yield i;
    }
  },
};

// should print 0..100 by 1s
for (let num of numbers) {
  console.log(num);
}

console.log(
  `My lucky numbers are: ${[...numbers[Symbol.iterator]({ step: 4 })]}`
);

/**
 * 'My lucky numbers are:
 * 0,4,8,12,16,20,24,28,32,36,40,44,48,52,
 * 56,60,64,68,72,76,80,84,88,92,96,100'
 */
