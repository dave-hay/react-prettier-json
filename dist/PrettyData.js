"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var PrettyData = function (_a) {
  var data = _a.data;
  var objData;
  if (typeof (data) === "string") {
    objData = JSON.parse(data);
  } else if (typeof (data) === "object") {
    objData = data;
  } else {
    throw new Error(
      "Error! PrettyData only takes an object or string. Got ".concat(
        typeof (data),
      ),
    );
  }
  return ((0, jsx_runtime_1.jsx)("div", {
    children: (0, jsx_runtime_1.jsx)("pre", {
      children: JSON.stringify(objData, null, 2),
    }),
  }));
};
exports["default"] = PrettyData;
