Rails.application.routes.draw do
  resources :projects do
    put :sort, on: :collection
  end

  get 'avatar/new'
  post 'avatar/create'

  resources :educations
  resources :skills, except: [:show, :index]
  resources :experiences
  resources :pictures
  devise_for :users
  resources :blogs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#resume'
  get 'contacts', to: 'static_pages#contact'

  ##
  # SpaceX API paged
  #
  get 'spacex', to: 'spacex#index'
end
