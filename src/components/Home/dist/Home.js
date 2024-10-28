"use strict";
exports.__esModule = true;
var react_1 = require("react");
var User_png_1 = require("../Assets/Images/User.png");
require("./Home.css");
var Posts_1 = require("../Posts/Posts");
function Home() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("header", null,
            react_1["default"].createElement("nav", { className: 'navBar' },
                react_1["default"].createElement("img", { src: User_png_1["default"], className: 'loginImage' }),
                react_1["default"].createElement("a", { className: 'loginText', href: '/login' }, "Admin"))),
        react_1["default"].createElement("div", { style: { textAlign: 'center' } },
            react_1["default"].createElement("h1", { style: { lineHeight: '56px' } },
                react_1["default"].createElement("span", { className: 'myDaily' }, "My Daily"),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("span", { className: 'uvozovkaInh1' }, "\u201C"),
                react_1["default"].createElement("span", { className: 'blogSign' }, "Blog"),
                react_1["default"].createElement("span", { className: 'uvozovkaInh1' }, "\u201D"))),
        react_1["default"].createElement("div", { className: 'posrWrapper' },
            react_1["default"].createElement(Posts_1["default"], null))));
}
exports["default"] = Home;
