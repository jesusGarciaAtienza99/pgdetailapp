# TinaCMS

The React/Vite site reads its editable content from `content/home.json` and
`content/services/*.json`. TinaCMS manages those files and image uploads in
`public/uploads`; the existing legal pages remain code-managed.

## Local editing

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and set `TINA_BRANCH` to the branch you use
   for editing. Local editing does not require TinaCloud credentials.
3. Run `npm run dev`.
4. Open the Vite URL followed by `/admin/index.html` to edit the content. The
   site and Tina's local content API run together.

Changes made in local mode update the JSON and image files in this repository.
Commit and deploy those changes to publish them.

## TinaCloud

To let the client edit online, create a TinaCloud project connected to this
GitHub repository and configure these environment variables for CMS builds:

- `TINA_BRANCH`: the repository branch TinaCloud edits.
- `NEXT_PUBLIC_TINA_CLIENT_ID`: the public client ID from TinaCloud.
- `TINA_TOKEN`: the read-only content API token from TinaCloud.

Set the same variables in the deployment platform. Run `npm run build:cms` for
a production build that includes Tina's `/admin` editor and the Vite site.
The deployment must publish the generated `dist` directory and rebuild when
content changes are pushed or merged.

The repository does not include deployment-provider configuration or TinaCloud
credentials. Those must be supplied by the repository owner before online
editing and automatic publication can be enabled.
