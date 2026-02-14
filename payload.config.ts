import path from "node:path"
import { fileURLToPath } from "node:url"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { buildConfig } from "payload"
import sharp from "sharp"

import { Media } from "@/collections/Media"
import { Recipes } from "@/collections/Recipes"
import { Tags } from "@/collections/Tags"
import { Users } from "@/collections/Users"
import { env } from "@/env"
import { defaultLexical } from "@/fields/default-lexical"

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
  collections: [Users, Media, Recipes, Tags],
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL,
    },
  }),
  editor: defaultLexical,
  plugins: [
    // storage-adapter-placeholder
  ],
  secret: env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
})
