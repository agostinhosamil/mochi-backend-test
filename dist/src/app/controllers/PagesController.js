"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesController = void 0;
var PagesController = /** @class */ (function () {
    function PagesController() {
    }
    PagesController.prototype.index = function (req, res) {
        res.end('Hello, World..!');
    };
    return PagesController;
}());
exports.PagesController = PagesController;
