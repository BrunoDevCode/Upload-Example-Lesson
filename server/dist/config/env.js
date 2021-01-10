"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

_dotenv["default"].config({
  path: '../../.env'
});

var PORT = process.env.PORT;
exports.PORT = PORT;