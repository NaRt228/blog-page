"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var AdminPost_1 = require("./AdminPost/AdminPost");
function Admin() {
    var usenavigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(), blogs = _a[0], setBlogs = _a[1];
    react_1.useEffect(function () {
        var username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/login');
        }
        else {
            axios_1["default"].get('https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts').then(function (res) {
                console.log(res.data);
                setBlogs(res.data);
            });
        }
    }, []);
    function handlePostDeletion() {
        axios_1["default"].get('https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts').then(function (res) {
            console.log(res.data);
            setBlogs(res.data);
        });
    }
    function addNew() {
        usenavigate('/admin/addNew');
    }
    return (React.createElement("div", null,
        React.createElement("button", { onClick: function () { sessionStorage.clear(); usenavigate('/'); } }, "Logout"),
        React.createElement("br", null),
        React.createElement("button", { onClick: addNew }, "Pridat novy"),
        React.createElement("br", null),
        React.createElement("button", { onClick: function () { return usenavigate('/'); } }, "Domu"),
        React.createElement("div", { className: "admin-blog-table" },
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: "table-header" }, "ID"),
                        React.createElement("th", { className: "table-header" }, "Image"),
                        React.createElement("th", { className: "table-header" }, "Title"),
                        React.createElement("th", { className: "table-header" }, "Description"),
                        React.createElement("th", { className: 'table-header' }, "Published"),
                        React.createElement("th", { className: "table-header" }, "Edit"),
                        React.createElement("th", { className: "table-header" }, "Delete"))),
                React.createElement("tbody", null, blogs === null || blogs === void 0 ? void 0 : blogs.map(function (item) { return (React.createElement(AdminPost_1["default"], { id: item.id, title: item.title, description: item.description, createdAt: item.createdAt, Image: item.Image, key: item.id, onDelete: handlePostDeletion })); }))))));
}
exports["default"] = Admin;
