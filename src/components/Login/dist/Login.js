"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
require("./Login.css");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("react");
var axios_1 = require("axios");
function Login() {
    var usenavigate = react_router_dom_1.useNavigate();
    react_1.useEffect(function () {
        var userStorage = sessionStorage.getItem('username');
        if (userStorage != null) {
            usenavigate('/admin');
        }
    }, []);
    var _a = react_2.useState(), username = _a[0], setUsername = _a[1];
    var _b = react_2.useState(), password = _b[0], setPassword = _b[1];
    var _c = react_2.useState(''), error = _c[0], setError = _c[1];
    function onUsernameChange(event) {
        console.log(event.target.value);
        setUsername(event.target.value);
    }
    function onPasswordChange(event) {
        console.log(event.target.value);
        setPassword(event.target.value);
    }
    function submitDataHandler(event) {
        return __awaiter(this, void 0, void 0, function () {
            var response, users, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        if (!validate()) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1["default"].get('https://65be8c26dcfcce42a6f2a73b.mockapi.io/api/adminUser/user')];
                    case 2:
                        response = _a.sent();
                        users = response.data;
                        user = users.find(function (user) { return user.username === username; });
                        // If user is found and password matches, consider it a successful login
                        if (user && user.password === password) {
                            console.log('Login successful');
                            sessionStorage.setItem('username', String(username));
                            usenavigate('/admin');
                        }
                        else {
                            // Display error message for invalid credentials
                            setError('Invalid username or password');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Error:', error_1);
                        setError('An error occurred. Please try again later.');
                        return [3 /*break*/, 4];
                    case 4:
                        setPassword('');
                        setUsername('');
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    function validate() {
        var result = true;
        if (username === '' || username === null) {
            result = false;
            alert("Type username ");
        }
        if (password === '' || password === null) {
            result = false;
            alert("Type password");
        }
        return result;
    }
    return (react_1["default"].createElement("div", { className: "login-page" },
        error && react_1["default"].createElement("div", { style: { textAlign: 'center' } }, error),
        react_1["default"].createElement("div", { className: "form" },
            react_1["default"].createElement("form", { className: "login-form", onSubmit: submitDataHandler },
                react_1["default"].createElement("input", { type: "text", placeholder: "username", onChange: function (e) { return onUsernameChange(e); }, value: username }),
                react_1["default"].createElement("input", { type: "password", placeholder: "password", onChange: function (e) { return onPasswordChange(e); }, value: password }),
                react_1["default"].createElement("button", null, "login")),
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/', style: { textDecoration: 'none' } },
                react_1["default"].createElement("p", { style: { marginTop: '30px', color: 'black', fontSize: '15px' } }, "Back Home")))));
}
exports["default"] = Login;
