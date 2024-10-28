"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
require("./AdminPost.css");
var react_router_dom_1 = require("react-router-dom");
function AdminPost(props) {
    var usenavigate = react_router_dom_1.useNavigate();
    function deletePost() {
        axios_1["default"]["delete"]("https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts/" + props.id).then(function (res) {
            console.log(res);
            props.onDelete();
        });
    }
    function editPost() {
        usenavigate("/admin/edit/" + props.id);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("tr", { className: "table-row" },
            React.createElement("td", { className: "table-data" }, props.id),
            React.createElement("td", { className: "table-data" },
                React.createElement("img", { className: "thumbnail-image", src: props.Image, alt: "Example Image" })),
            React.createElement("td", { className: "table-data", style: { fontWeight: '600' } }, props.title),
            React.createElement("td", { className: "table-data", style: { fontSize: '13px' } }, props.description),
            React.createElement("td", { className: "table-data", style: { width: '12%' } },
                " ",
                new Date(props.createdAt).toDateString()),
            React.createElement("td", { className: "table-data" },
                React.createElement("button", { className: "buttonEdit", onClick: editPost }, "Edit")),
            React.createElement("td", { className: "table-data" },
                React.createElement("button", { className: "buttonRemove", onClick: deletePost }, "Delete")))));
}
exports["default"] = AdminPost;
