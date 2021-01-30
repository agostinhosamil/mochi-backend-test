"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var currentDirectoryFileList = fs_1.default.readdirSync(__dirname);
function lowerCaseFirstChar(str) {
    return str.charAt(0).toLowerCase() + (str.substring(1, str.length));
}
function stripControllerNameExtension(str) {
    return lowerCaseFirstChar(str.replace(/(\.(j|t)s)$/i, ''));
}
for (var i = 0; i < currentDirectoryFileList.length; i++) {
    var controllerPropName = currentDirectoryFileList[i].replace(/(\.(j|t)s)$/i, '');
    var controllerName = currentDirectoryFileList[i].replace(/((Controller)?\.(j|t)s)$/i, '');
    var controllerCore = require(path_1.default.resolve(__dirname, currentDirectoryFileList[i]));
    if ('index' !== controllerName) {
        try {
            exports[stripControllerNameExtension(controllerName)] = (new controllerCore[controllerPropName]);
        }
        catch (err) {
            // ...
            console.log(err);
        }
    }
}
