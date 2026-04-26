# Deploy Steps — DigitalOcean App Platform

Web-only path. No command line required. ~10 minutes.

---

## Step 1: GitHub account (skip if you already have one)

1. Go to **github.com**
2. Click "Sign up"
3. Use a personal email, not your P&W email
4. Pick a username — anything you want, doesn't have to be your real name. This will appear in your repo URLs (e.g. `github.com/YOUR_USERNAME/operations-platform`)
5. Verify email
6. **Free account is fine.** No need for paid.

---

## Step 2: Create a new private repo

1. Once logged into GitHub, click the **"+"** in the top right → **"New repository"**
2. Repository name: `operations-platform` (or anything you prefer)
3. Description: leave blank or "Web platform"
4. **Set to Private** (important — keeps the code out of public view)
5. **Do NOT** check "Add a README file" — we'll upload our own
6. **Do NOT** check "Add .gitignore" — we'll upload our own
7. Click **"Create repository"**

You'll land on an empty repo page with instructions. Ignore the command-line instructions. We're using the web upload path.

---

## Step 3: Upload the files

On the empty repo page:

1. Click the link **"uploading an existing file"** (it's in the middle of the page)
2. Open your Obsidian vault, navigate to the `Operations_Platform/` folder
3. Drag-and-drop these four files into the GitHub upload area:
   - `package.json`
   - `index.js`
   - `.gitignore`
   - `README.md`
4. Scroll down to the "Commit changes" box
5. Commit message: `Initial scaffolding`
6. Click the green **"Commit changes"** button

The files are now in your GitHub repo. You should see them listed on the repo's main page.

---

## Step 4: Connect DigitalOcean to the repo

Back in DigitalOcean's App Platform setup:

1. Click **"GitHub"** as the source (if it asks again)
2. It will prompt you to authorize DigitalOcean to access your GitHub account
3. Choose to grant access to **only this specific repo** (`operations-platform`) — not all your repos. More secure.
4. Once authorized, the repo should appear in the dropdown
5. Select it
6. **Branch**: `main`
7. **Source directory**: `/` (default)
8. **Autodeploy**: leave on (default)
9. Click **Next**

---

## Step 5: Configure the app

DO should auto-detect Node.js. Confirm:

- **Type**: Web Service
- **Name**: `operations-platform` (or rename if you want)
- **Build command**: `npm install` (or leave default)
- **Run command**: `npm start` (or leave default)
- **HTTP port**: `8080`
- **Plan**: Choose **Basic** → **$5/month** for now (cheapest tier that works). You can downgrade to free static-site later if we restructure, but $5/mo is fine for testing.

Click **Next** through region selection (pick whichever is closest to you), then **Create Resources**.

---

## Step 6: Wait for first deploy (~3-5 minutes)

DO will:
1. Pull your code from GitHub
2. Run `npm install` (downloads Express)
3. Run `npm start` (launches the server)
4. Assign a URL like `https://operations-platform-XXXXX.ondigitalocean.app/`

Once it shows "Deployed successfully," click the URL. You should see the "Building something useful." page.

If you see that page — congratulations, you have a live, deployed web app on infrastructure you control. The next time we want to update it, we just push new code to the GitHub repo and DO redeploys automatically.

---

## What's next after this works

Once you have the live URL working, screenshot it and send it back. Then we:
1. Decide which actual product to build first (R&D credit consultancy, deep-tech dataset, both, or something else)
2. Replace `index.js` with real product code
3. Add database, Stripe checkout, scraper logic, etc., piece by piece
4. Each push to GitHub auto-redeploys

Tonight's win: a live URL. Tomorrow's work: making it do something useful.

---

## If you get stuck

Common issues:
- **GitHub asks for 2FA setup** — just complete it, then come back.
- **DO can't find the repo** — make sure you granted DO access to that specific repo in step 4.
- **Build fails** — most often a typo in `package.json`. Re-upload the file from your vault.
- **App deploys but URL shows error** — check the DO "Runtime Logs" tab; it'll show what's wrong.

For anything else, paste the error here and I'll help debug.
