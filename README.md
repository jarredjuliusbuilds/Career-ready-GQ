# CareerReady Gqeberha Website

Single-page marketing website for a local CV-writing and interview prep business based in Nelson Mandela Bay, South Africa.

## File Structure

```
careerready-website/
├── index.html
├── css/
│   └── style.css
├── .gitignore
└── README.md
```

## WhatsApp Placeholder

All WhatsApp links use the placeholder number `27XXXXXXXXX`. Replace it with your real number before deploying.

Find all instances:
```bash
grep -r "27XXXXXXXXX" .
```

## Deploy Free via GitHub Pages

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Repository name: `careerready-website` (or your choice)
   - Public or Private (Pages works with both on paid plans; Public required for free)
   - Do NOT initialize with README, .gitignore, or license

2. **Push your local project**
   ```bash
   cd careerready-website
   git init
   git add .
   git commit -m "Initial commit: CareerReady Gqeberha website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/careerready-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages (left sidebar)
   - Source: "Deploy from a branch"
   - Branch: `main` / `(root)`
   - Click Save

4. **Get your live URL**
   - Wait 1–2 minutes for the build to complete
   - Your site will be live at: `https://YOUR_USERNAME.github.io/careerready-website/`

5. **Optional: Custom domain**
   - Add a `CNAME` file to the root with your domain (e.g., `careerreadygqeberha.co.za`)
   - Configure DNS: CNAME record pointing to `YOUR_USERNAME.github.io`
   - Enable "Enforce HTTPS" in Pages settings after DNS propagates