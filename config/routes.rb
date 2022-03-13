require 'sidekiq/web'

Rails.application.routes.draw do
  resources :financial_types
  resources :my_assets

  resources :stocks
  get 'stocks/action/sell_index', to:'stocks#sell_index'
  post 'stocks/action/sell', to: "stocks#sell"

  resources :incomes, except: [:index]
  resources :loans, except: [:index]
  resources :expenses, except: [:index]

  resources :photo_sections
  resources :contacts, only: [:index, :new, :create]
  devise_for :users, path: '',
             path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'register' },
             controllers: { registrations: "registrations"}

  resources :projects do
    put :sort, on: :collection
  end

  get 'avatar/new'
  post 'avatar/create'

  resources :educations, except: [:show, :index]
  resources :skills, except: [:show, :index]
  resources :experiences, except: [:show, :index]
  resources :blogs
  resources :main_skills, except: [:show, :index]

  get 'blogs-api/:date', to: 'blogs#api_index'
  get 'body-short-blogs-api/:blog_id', to: 'blogs#api_translate_body_to_short'
  get 'api-search-tags/:tag_name', to: 'blogs#api_search_tags'
  get 'api-tags', to: 'blogs#api_tags'
  get 'api-projects', to: 'projects#api_index'
  get 'random-blogs', to: "blogs#api_get_random"
  get 'random-projects', to: "projects#api_get_random"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#index'
  get 'resume', to: 'static_pages#resume'

  ##
  # SpaceX API paged
  #
  get 'spacex', to: 'spacex#index'

  ##
  # Home Page API
  #
  get 'hard-skills', to: 'main_skills#api_hard_skills'
  get 'soft-skills', to: 'main_skills#api_soft_skills'

  ##
  # Photo Gallery Section
  #
  resources :photos
  get 'gallery-photos', to: 'photos#gallery_photos'
  get 'photos-key-words', to: 'photo_sections#photos_key_words'
  resources :skills_app, only: [:index]

  ##
  # Household Dashboard
  #
  get 'household/dashboard', to: 'household#dashboard'
  get 'household/jobs', to: 'household#job'
  get 'household/budget', to: 'household#budget'
  get 'household/stocks', to:'household#stock'
  get 'household/assets', to:'household#asset'
  get 'household/fear_n_greed_image', to: 'household#fear_n_greed_image'
  mount Sidekiq::Web => 'jobs'

  resources :manager_jobs
end
