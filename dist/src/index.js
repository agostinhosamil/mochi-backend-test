"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var routes_1 = require("./config/routes");
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(cors_1.default());
app.use(routes_1.Routes);
app.listen(process.env.PORT || 3333, function () {
    return console.log('server running..!');
});
