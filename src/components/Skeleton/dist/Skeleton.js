"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Skeleton.css");
function Skeleton() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "load" }),
        react_1["default"].createElement("h2", { style: { textAlign: 'center', marginTop: '50px' } }, "Loading...")));
}
exports["default"] = Skeleton;
