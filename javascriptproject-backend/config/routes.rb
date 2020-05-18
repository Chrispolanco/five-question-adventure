Rails.application.routes.draw do
  resources :heros, only: [:index, :new, :create, :show, :edit, :update]
  resources :adventures, only: [:index, :new, :create, :show, :edit, :update]
  resources :users , only: [:index, :new, :create, :show, :edit, :update]
  resources :sessions , only: [:index, :new, :create, :show, :edit, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/test', to: 'application#test'

end
