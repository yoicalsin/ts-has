import bind from 'function-bind';

interface Has {
    (
        object: {
            [key: string]: any;
        },
        path: string | number,
    ): boolean;
}

/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @description Object.prototype.hasOwnProperty.call shortcut for typescript, ts-has
 * @example
 * has({}, 'hasOwnProperty'); // false
 * has(Object.prototype, 'hasOwnProperty'); // true
 */
const has: Has = bind.call(Function.call, Object.prototype.hasOwnProperty);

export default has;
