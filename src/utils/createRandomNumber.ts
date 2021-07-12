export const createRandomNumber = (min: number, max?: number): number => {
  if (typeof max === 'undefined') {
    return Math.floor(Math.random() * Math.floor(min));
  }

  return Math.floor(Math.random() * (max - min) + min);
}