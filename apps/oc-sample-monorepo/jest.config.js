module.exports = {
  name: "oc-sample-monorepo",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/oc-sample-monorepo/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
