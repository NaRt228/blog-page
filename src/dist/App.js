"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var Home_1 = require("./components/Home/Home");
var Login_1 = require("./components/Login/Login");
var NotFound_1 = require("./components/NotFound/NotFound");
var SinglePost_1 = require("./components/SingePost/SinglePost");
var Admin_1 = require("./components/Admin/Admin");
var AdminEdit_1 = require("./components/Admin/AdminPost/AdminEdit");
var AdminAdd_1 = require("./components/Admin/AdminPost/AdminAdd");
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(Home_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/post/:id', element: React.createElement(SinglePost_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/login', element: React.createElement(Login_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/admin', element: React.createElement(Admin_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/admin/edit/:id', element: React.createElement(AdminEdit_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/admin/addNew', element: React.createElement(AdminAdd_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement(NotFound_1["default"], null) })))));
}
exports["default"] = App;
