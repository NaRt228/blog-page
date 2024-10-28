"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
function AdminAdd() {
    var usenavigate = react_router_dom_1.useNavigate();
    var _a = react_2.useState(''), title = _a[0], setTitle = _a[1];
    var _b = react_2.useState(''), description = _b[0], setDescription = _b[1];
    var _c = react_2.useState(), createdAt = _c[0], setCreatedAt = _c[1];
    var _d = react_2.useState(''), image = _d[0], setImage = _d[1];
    function changeTitle(e) {
        console.log(e.target.value);
        setTitle(e.target.value);
    }
    function changeDescription(e) {
        setDescription(e.target.value);
    }
    function changeImage(e) {
        setImage(e.target.value);
    }
    function changePost(e) {
        e.preventDefault();
        var postObject = {
            title: title,
            description: description,
            Image: image,
            createdAt: new Date()
        };
        axios_1["default"].post("https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts/", postObject).then(function (res) {
            console.log(res.data);
            usenavigate('/admin');
        });
    }
    return (react_1["default"].createElement("div", { style: { fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '0 auto', marginTop: '200px' } },
        react_1["default"].createElement("form", { onSubmit: changePost, style: { backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' } },
            react_1["default"].createElement("input", { type: "text", value: title, onChange: changeTitle, style: { width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }, placeholder: "Title" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("textarea", { cols: 50, rows: 20, style: { resize: 'none', width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }, value: description, onChange: changeDescription, placeholder: "Description" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("input", { type: "text", value: image, onChange: changeImage, style: { width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }, placeholder: "Image URL" }),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("input", { type: "submit", value: "Zmenit", style: { width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' } }))));
}
exports["default"] = AdminAdd;
