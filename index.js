"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const function_bind_1 = __importDefault(require("function-bind"));
/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @description Object.prototype.hasOwnProperty.call shortcut for typescript, ts-has
 * @example
 * has({}, 'hasOwnProperty'); // false
 * has(Object.prototype, 'hasOwnProperty'); // true
 */
const has = function_bind_1.default.call(Function.call, Object.prototype.hasOwnProperty);
exports.default = has;
