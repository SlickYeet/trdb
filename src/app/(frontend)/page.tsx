import { fileURLToPath } from "node:url"
import config from "@payload-config"
import { headers as getHeaders } from "next/headers.js"
import { getPayload } from "payload"

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <main className="mx-auto flex h-screen max-w-5xl flex-col items-center justify-between overflow-hidden p-6 sm:p-11.25">
      <div className="flex grow flex-col items-center justify-center">
        {/* Logo */}
        <picture className="relative">
          <div className="absolute inset-0 animate-pulse bg-linear-to-r from-[oklch(0.7468_0.1455_302.21)] via-[oklch(0.7345_0.0464_270.71)] to-[oklch(0.7563_0.1807_347.17)] opacity-20 blur-lg dark:via-[oklch(0.5567_0.0816_269.53)]" />

          <source srcSet="https://github.com/lx2dev/create-lx2-app/blob/f1209465d59e03e284702d9f492f1bc1cfa49c32/docs/v2/public/android-chrome-192x192.png?raw=true" />
          <img
            alt="Logo"
            className="block h-auto max-w-full"
            height={65}
            src="https://github.com/lx2dev/create-lx2-app/blob/f1209465d59e03e284702d9f492f1bc1cfa49c32/docs/v2/public/android-chrome-192x192.png?raw=true"
            width={65}
          />
        </picture>

        {/* Title & Description */}
        {user ? (
          <h1 className="mt-6 text-balance font-bold text-5xl tracking-tight md:text-6xl lg:text-7xl">
            Welcome,{" "}
            <span className="text-[oklch(0.7468_0.1455_302.21)] capitalize">
              {user.email}
            </span>
            !
          </h1>
        ) : (
          <>
            <h1 className="mt-6 text-balance font-bold text-5xl tracking-tight md:text-6xl lg:text-7xl">
              Create{" "}
              <span className="text-[oklch(0.7468_0.1455_302.21)]">Lx2</span>{" "}
              App
            </h1>
            <p className="text-center text-lg text-neutral-700 md:text-xl lg:mt-6 dark:text-neutral-300">
              The Most Opinionated Way to Build Next.js Apps
            </p>
          </>
        )}

        {/* Admin Panel & Payload Docs */}
        <div className="mt-12 flex items-center gap-3">
          <a
            className="rounded-md bg-white px-2 py-1 text-black hover:opacity-80 focus:opacity-80 focus:outline-none active:opacity-70 active:outline-none"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
          <a
            className="rounded-md border border-white px-2 py-1 text-white hover:opacity-80 focus:opacity-80 focus:outline-none active:opacity-70 active:outline-none"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Payload Docs
          </a>
        </div>

        {/* Links */}
        <div className="mt-12 flex items-center gap-3">
          <a
            className="flex items-center rounded-md border border-white/25 px-2 py-1 outline-none hover:opacity-80 focus:opacity-80 active:opacity-70"
            href="https://create.lx2.dev/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Docs
            <svg
              className="mb-1.5 size-4 fill-none stroke-2 stroke-current"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Docs</title>
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
          <a
            className="flex items-center rounded-md border border-white/25 px-2 py-1 outline-none hover:opacity-80 focus:opacity-80 active:opacity-70"
            href="https://hub.lx2.dev/discord"
            rel="noopener noreferrer"
            target="_blank"
          >
            Discord
            <svg
              className="mb-1.5 size-4 fill-none stroke-2 stroke-current"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Discord</title>
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
          <a
            className="flex items-center rounded-md border border-white/25 px-2 py-1 outline-none hover:opacity-80 focus:opacity-80 active:opacity-70"
            href="https://github.com/lx2dev/create-lx2-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
            <svg
              className="mb-1.5 size-4 fill-none stroke-2 stroke-current"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center gap-1 text-neutral-600 text-sm lg:flex-row lg:gap-2 dark:text-neutral-400">
        <p className="m-0">Get started by editing </p>
        <a
          className="rounded-md bg-neutral-200 px-2 py-1 dark:bg-neutral-800"
          href={fileURL}
        >
          <code>src/app/(frontend)/page.tsx</code>
        </a>
      </div>
    </main>
  )
}
