import { defineCliConfig } from "sanity/cli";

const config = {
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "u9jnua2q",
    dataset: "production",
  },
};

export default defineCliConfig(config);
