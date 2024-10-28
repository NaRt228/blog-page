"use strict";
exports.__esModule = true;
require("./NotFound.css");
function NotFound() {
    return (React.createElement("div", { className: "container" },
        React.createElement("h1", null, "404"),
        React.createElement("h2", null, "Page Not Found"),
        React.createElement("p", null,
            "The Page you are looking for doesn't exist or an other error occured. Go to ",
            React.createElement("a", { href: "/" }, "Home Page."))));
}
exports["default"] = NotFound;
