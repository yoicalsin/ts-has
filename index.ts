import bind from 'function-bind';

const has = bind.call(Function.call, Object.prototype.hasOwnProperty);

export default has;
