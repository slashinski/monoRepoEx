module.exports = {
  name: "mono-repo-ex",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/mono-repo-ex/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
