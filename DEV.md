# Local development

## Quick start

```bash
npm install
npm run dev:clean   # recommended first run or after cache errors
```

## If you see webpack cache / 500 errors

```
[webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT ... rename ...pack.gz_
```

This is a corrupted Next.js webpack cache, often triggered when:

1. The project lives in **Downloads** (iCloud sync interferes with atomic file renames in `.next/cache/`)
2. Multiple `next dev` processes run at once
3. Dev server restarts mid-compile

**Fix:**

```bash
# Stop all running next dev processes, then:
npm run dev:clean
```

If it keeps happening, move the repo out of Downloads:

```bash
mv ~/Downloads/designient-website-1 ~/Projects/designient-website-1
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Standard dev server |
| `npm run dev:clean` | Delete `.next` then start dev (use after ENOENT/500) |
| `npm run dev:turbo` | Turbopack dev (bypasses webpack disk cache) |
| `npm run clean` | Remove `.next` only |
| `npm run build:clean` | Clean build for production check |
| `npm run content:lint` | Check user-facing copy for em dashes and AI buzzwords |

## Rules

- Never commit `.next/` (already in `.gitignore`)
- Run only one dev server per project directory
- After large branch switches: `npm run dev:clean`
