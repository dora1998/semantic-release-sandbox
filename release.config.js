// @ts-check
// featfeatfeat
// hotfix
// hotfixであるべきだがfeat
/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["main", "1.+([0-9]).x"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { breaking: true, release: "major" },
          { revert: true, release: "patch" },
          { type: "feat", release: "minor" },
          { type: "update", release: "minor" },
          { type: "disable", release: "minor" },
          { type: "!(release)", release: "patch" },
        ],
        parserOpts: {
          revertPattern: /^(Revert|Reapply)\s"([\s\S]*)"$/m,
          revertCorrespondence: ["header"],
        },
      },
    ],
    [
      "@semantic-release/exec",
      {
        publishCmd: "echo ${nextRelease.version}",
      },
    ],
    [
      "@semantic-release/github",
      {
        successComment: false,
      },
    ],
  ],
};
