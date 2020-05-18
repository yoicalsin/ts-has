interface Has {
    (object: {
        [key: string]: any;
    }, path: string | number): boolean;
}
/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @description Object.prototype.hasOwnProperty.call shortcut for typescript, ts-has
 * @example
 * has({}, 'hasOwnProperty'); // false
 * has(Object.prototype, 'hasOwnProperty'); // true
 */
declare const has: Has;
export default has;
