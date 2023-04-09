import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
//@ts-ignore
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";
import { getDefaultDocumentNode } from "./lib/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export default defineConfig({
  basePath: "/studio",
  // PAPAFAM Content Studio
  name: "JohnCanero_Content_Studio",
  title: "JohnCanero Content Studio",
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
