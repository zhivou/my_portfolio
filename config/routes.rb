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
  get 'blogs-api/:date', to: 'blogs#api_index'
  get 'body-short-blogs-api/:blog_id', to: 'blogs#api_translate_body_to_short'
  get 'api-search-tags/:tag_name', to: "blogs#api_search_tags"
  get 'api-tags', to: "blogs#api_tags"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#resume'
  get 'home', to: 'home#index'

  ##
  # SpaceX API paged
  #
  get 'spacex', to: 'spacex#index'
end
