# BSTC_FULL_WEBSITE

Full source snapshot of the BSTC website hosted at https://bstcsoccer.higgsfield.app.

## Source

Imported from Higgsfield revision `32c81f437020326eab2cf7aac88fb983c6b8b3b7` on September 23, 2026. Includes the latest Matthew and Marina contact details and the updated after-school and travel training schedule. The live homepage program cards are already unnumbered.

The application is in `app/`: React 19, TanStack Start, Vite, and Cloudflare Worker configuration. Images and fonts are included. Vendored workspace packages in `app/packages/` are required by the existing project configuration.

## Local development

Use Node.js 22 and Bun. From the repository root:

```sh
cd app
bun install --frozen-lockfile
bun run dev
```

For validation: `bun run typecheck` and `bun run build` from `app/`.

## Deployment and synchronization

The live site remains deployed through Higgsfield. This repository stores its source snapshot; automatic two-way synchronization and GitHub-triggered Higgsfield deployment are NOT configured. Changes made in either location must be deliberately synchronized before deployment.

This is the marketing website, not the separate BSTC payment portal. It does not include live payment credentials or a registration database. The uploaded HTML ZIP is a different website version and is not substituted for this live React application.

The server-rendered application is not a plain HTML upload for Namecheap shared hosting. A compatible deployment setup or separately prepared static export is needed before serving it there.

Keep secrets out of Git. Configure them in the hosting environment when required.
