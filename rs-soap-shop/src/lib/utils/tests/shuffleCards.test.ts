import shuffleProducts from '../shuffleCards';

it('return an Array of proper type', () => {
  const testArr = [1, 2, 3, 4, 5];
  const arr = shuffleProducts(testArr);
  expect(
    arr.every(item => {
      typeof item === 'number';
    })
  );
});
