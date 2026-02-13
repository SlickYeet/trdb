import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  client: {
    NEXT_PUBLIC_URL: z.url(),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NODE_ENV: process.env.NODE_ENV,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    PREVIEW_SECRET: process.env.PREVIEW_SECRET,
  },
  server: {
    ADMIN_EMAIL: z.email(),
    ADMIN_PASSWORD: z.string(),
    DATABASE_URL: z.url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    PAYLOAD_SECRET: z.string().min(32),
    PREVIEW_SECRET: z.string().min(32),
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
