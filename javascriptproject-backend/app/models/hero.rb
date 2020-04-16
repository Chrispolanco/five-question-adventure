class Hero < ApplicationRecord
    has_many :adventures
    has_many :users, through: :adventure
end
