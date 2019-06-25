# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')
Rails.application.config.assets.precompile += %w( blogs.css )
Rails.application.config.assets.precompile += %w( spacex.css )
Rails.application.config.assets.precompile += %w( spacex.js )
Rails.application.config.assets.precompile += %w( projects.css )
Rails.application.config.assets.precompile += %w( contacts.css )
Rails.application.config.assets.precompile += %w( semantic-ui-css/semantic.min.css )

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
