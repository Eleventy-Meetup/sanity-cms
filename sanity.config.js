import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { richDate } from "@sanity/rich-date-input";
import { markdownSchema } from "sanity-plugin-markdown";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schema";

const config = {
  title: "Eleventy Meetup website",
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || "u9jnua2q",
  dataset: "production",
  plugins: [structureTool(), richDate(), markdownSchema(), visionTool()],
  schema: {
    types: schemas,
  },
};

export default defineConfig(config);
