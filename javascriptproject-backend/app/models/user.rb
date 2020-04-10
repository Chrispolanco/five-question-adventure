class User < ApplicationRecord
    has many :adventures
    has_many :heroes, through: :adventures
    accepts_nested_attributes_for :adventures

    validates :name, :username, :password, presence: true 
end
