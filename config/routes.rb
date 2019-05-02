Rails.application.routes.draw do
  resources :blogs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'blogs#index'
  get 'contacts', to: 'static_pages#contact'
end
