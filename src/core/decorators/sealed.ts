/**
 * Make sure that class is not extensible.
 *
 * It means, if you have 2 properties in your class,
 * it will remain 2 only.
 */
export function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
