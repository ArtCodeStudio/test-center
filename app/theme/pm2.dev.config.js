module.exports = {
  apps: [
    {
      name: "dev:@test-center/theme",
      script: "yarn run watch",
      watch: ["package.json", "../../../.pnp.js"],
      instances: 1,
      env: {
        NODE_ENV: "development",
        DEBUG: "",
      },
    },
  ],
};
