"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Post.css");
var react_router_dom_1 = require("react-router-dom");
function Post(props) {
    return (react_1["default"].createElement("div", { className: "post" },
        react_1["default"].createElement("img", { className: "postImg", src: props.Image, alt: "" }),
        react_1["default"].createElement("div", { className: "postInfo" },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "post/" + props.id },
                react_1["default"].createElement("span", { className: "postTitle" }, props.title)),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("span", { className: "postDate" }, new Date(props.createdAt).toDateString())),
        react_1["default"].createElement("p", { className: "postDesc" }, props.description)));
}
exports["default"] = Post;
