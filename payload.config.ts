// storage-adapter-import-placeholder

import path from "node:path"
import { fileURLToPath } from "node:url"
import { sqliteAdapter } from "@payloadcms/db-sqlite"
import { payloadCloudPlugin } from "@payloadcms/payload-cloud"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"
import sharp from "sharp"

import { Media } from "@/collections/Media"
import { Users } from "@/collections/Users"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  collections: [Users, Media],
  db: sqliteAdapter({
    // SQLite-specific arguments go here.
    // `client.url` is required.
    client: {
      authToken: process.env.DATABASE_AUTH_TOKEN,
      url: process.env.DATABASE_URL || "",
    },
  }),
  editor: lexicalEditor(),
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
})
