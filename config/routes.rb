Rails.application.routes.draw do
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
  get 'api-search-tags/:tag_name', to: "blogs#api_search_tags"
  get 'api-tags', to: "blogs#api_tags"
  get 'api-projects', to: "projects#api_index"
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
end
