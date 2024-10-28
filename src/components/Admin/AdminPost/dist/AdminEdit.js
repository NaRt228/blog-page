"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function AdminEdit() {
    var usenavigate = react_router_dom_1.useNavigate();
    var id = react_router_dom_1.useParams();
    var _a = react_1.useState(''), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(''), description = _b[0], setDescription = _b[1];
    var _c = react_1.useState(), createdAt = _c[0], setCreatedAt = _c[1];
    var _d = react_1.useState(''), image = _d[0], setImage = _d[1];
    react_1.useEffect(function () {
        var username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            usenavigate('/login');
        }
        else {
            axios_1["default"].get("https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts/" + id.id).then(function (res) {
                console.log(res.data.title);
                setTitle(res.data.title);
                setDescription(res.data.description);
                setCreatedAt(res.data.createdAt);
                setImage(res.data.Image);
            })["catch"](function (error) {
            });
        }
    }, []);
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
            id: id.id,
            title: title,
            description: description,
            Image: image,
            createdAt: new Date()
        };
        axios_1["default"].put("https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts/" + id.id, postObject).then(function (res) {
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
exports["default"] = AdminEdit;
