"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./SinglePost.css");
var io_1 = require("react-icons/io");
var Skeleton_1 = require("../Skeleton/Skeleton");
var NotFound_1 = require("../NotFound/NotFound");
function SinglePost() {
    var id = react_router_dom_1.useParams();
    var _a = react_1.useState(), singlePost = _a[0], setSinglePost = _a[1];
    var _b = react_1.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    react_1.useEffect(function () {
        axios_1["default"].get("https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts/" + id.id).then(function (res) {
            console.log(res.data);
            setSinglePost(res.data);
            setIsLoading(false);
        })["catch"](function (error) {
            console.log(error);
            setSinglePost(null);
            setIsLoading(false);
        });
    }, []);
    return (React.createElement("div", null, isLoading ? (React.createElement(Skeleton_1["default"], null)) : (singlePost === null ? (React.createElement(NotFound_1["default"], null)) : (React.createElement(React.Fragment, null,
        React.createElement("a", { href: '/', className: 'backLink' },
            React.createElement(io_1.IoIosUndo, { className: 'undoIcons ' })),
        React.createElement("div", { className: 'blogWrap' },
            React.createElement("img", { src: singlePost === null || singlePost === void 0 ? void 0 : singlePost.Image, className: 'imageBlogPost' }),
            React.createElement("h1", { className: 'singleTitlePost' }, singlePost === null || singlePost === void 0 ? void 0 : singlePost.title),
            React.createElement("p", { className: 'singleDescrPost' }, singlePost === null || singlePost === void 0 ? void 0 : singlePost.description)))))));
}
exports["default"] = SinglePost;
