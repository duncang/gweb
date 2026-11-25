# Jekyll starter site

A minimal static website built with Jekyll.

## Requirements

- Ruby 2.7 or later
- Bundler (`gem install bundler`)

## Run locally

```sh
bundle install
bundle exec jekyll serve
```

Open the local URL printed by Jekyll (usually http://127.0.0.1:4000). The
development server rebuilds the site when files change.

## Build

```sh
bundle exec jekyll build
```

Generated files are written to `_site/` and are excluded from version control.

## Customize

- Set the site name, description, and deployment `baseurl` in `_config.yml`.
- Add Markdown pages with YAML front matter.
- Update the shared HTML in `_layouts/default.html`.
- Customize styles in `assets/css/style.css`.
