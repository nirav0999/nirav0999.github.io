# Giscus Comments Setup

## Enable on a blog post

Add to front matter:
```yaml
comments: true
```

## Initial setup (already done)

1. Enable Discussions on GitHub repo
2. Install [Giscus app](https://github.com/apps/giscus)
3. Get config from [giscus.app](https://giscus.app)
4. Add to `_config.yml`:
   ```yaml
   giscus:
     repo: username/repo
     repo_id: YOUR_REPO_ID
     category: General
     category_id: YOUR_CATEGORY_ID
   ```
