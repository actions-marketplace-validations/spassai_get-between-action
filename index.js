const core = require("@actions/core");
const github = require("@actions/github");

String.prototype.encodeRegExp = function () {
  return this.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

try {
  const string = core.getInput("string");
  const start = core.getInput("start");
  const end = core.getInput("end");

  const regexp = new RegExp(
    `${start.encodeRegExp()}.*${end.encodeRegExp()}`,
    "gi"
  );

  let result = string.match(regexp);
  result += "";
  result = result.replace(start, "").replace(end, "");

  core.setOutput("substring", result);
} catch (error) {
  core.setFailed(error.message);
}
