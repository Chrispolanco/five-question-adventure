class User < ApplicationRecord
    has_many :addentures
    has_many :heroes, through: :adventures 
end
