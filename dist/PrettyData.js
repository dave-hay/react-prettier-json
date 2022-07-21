"use strict";
exports.__esModule = true;
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
  return (
    <div>
      <pre>{JSON.stringify(objData, null, 2)}</pre>
    </div>
  );
};
exports["default"] = PrettyData;
