// storage-adapter-import-placeholder

import path from "node:path"
import { fileURLToPath } from "node:url"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"
import sharp from "sharp"

import { Media } from "@/collections/Media"
import { Users } from "@/collections/Users"
import { env } from "@/env"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    autoLogin:
      env.NODE_ENV === "production"
        ? false
        : {
            email: env.ADMIN_EMAIL,
            password: env.ADMIN_PASSWORD,
          },

    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  collections: [Users, Media],
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL,
    },
  }),
  editor: lexicalEditor(),
  plugins: [
    // storage-adapter-placeholder
  ],
  secret: env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
})
