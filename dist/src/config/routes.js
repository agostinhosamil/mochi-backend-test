"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var express_1 = require("express");
var _controllers_1 = require("@controllers");
exports.Routes = express_1.Router();
exports.Routes.get('/', _controllers_1.pages.index);
