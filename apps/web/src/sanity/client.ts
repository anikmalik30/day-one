import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "6ni07k2f",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});