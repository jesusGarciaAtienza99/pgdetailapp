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
The first local run also generates `tina/tina-lock.json`, the schema index
required by TinaCloud. Commit and push that file with the content and schema
before asking TinaCloud to index the repository. You do not need to run `init`
again because this project already has its Tina configuration.

## TinaCloud

To let the client edit online, create a TinaCloud project connected to this
GitHub repository and configure these environment variables for CMS builds:

- `TINA_BRANCH`: the repository branch TinaCloud edits.
- `NEXT_PUBLIC_TINA_CLIENT_ID`: the public client ID from TinaCloud.
- `TINA_TOKEN`: the read-only content API token from TinaCloud.

Set the same variables in the deployment platform. In Vercel, set the Root
Directory to `pgdetail-react` and the Output Directory to `dist`. The default
Build Command, `npm run build`, now builds Tina's `/admin` editor and then the
Vite site. `npm run build:cms` is an explicit alias for the same CMS-enabled
build; `npm run build:site` builds only the public site and does not include
the admin.

The deployment must rebuild when content changes are pushed or merged so the
public site reflects updated JSON files and images.

If `/admin/index.html` returns 404 after deployment, check the Vercel build
logs for a successful Tina build and confirm the deployment used the latest
commit containing the CMS-enabled `build` script and `tina/tina-lock.json`.

The repository does not include deployment-provider configuration or TinaCloud
credentials. Those must be supplied by the repository owner before online
editing and automatic publication can be enabled.
