Rails.application.routes.draw do
  resources :educations
  resources :skills
  resources :experiences
  resources :pictures
  devise_for :users
  resources :blogs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#resume'
  get 'contacts', to: 'static_pages#contact'
end
