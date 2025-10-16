source "https://rubygems.org"
ruby ">= 3.0"

gem "jekyll", "~> 4.3"
gem "webrick", "~> 1.8"        # needed for `jekyll serve` on Ruby 3+
gem "sassc", "~> 2.4"          # Use sassc instead of sass-embedded for better CI compatibility
gem "jekyll-sass-converter", "~> 2.2"  # Force older sass converter that works with sassc
# gem "mini_racer", "~> 0.6"   # OPTIONAL: only if you need ExecJS without Node
gem "unicode_utils"

# Non-Jekyll plugins you use elsewhere
gem "httparty"
gem "feedjira"

group :jekyll_plugins do
  gem "jekyll-archives"
  gem "jekyll-diagrams"
  gem "jekyll-email-protect"
  gem "jekyll-feed"
  gem "jekyll-imagemagick"
  gem "jekyll-minifier"
  gem "jekyll-paginate-v2"
  gem "jekyll-scholar"
  gem "jekyll-sitemap"
  gem "jekyll-target-blank"
  gem "jekyll-twitter-plugin"
  gem "jemoji"
end
