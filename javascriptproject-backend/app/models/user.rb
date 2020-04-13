class User < ApplicationRecord
    has many :adventures
    has_many :heroes, through: :adventures
    accepts_nested_attributes_for :adventures

    validates :name, :username, presence: true 
    validates :name, :username, uniqueness:true 
    validates :name, :username, format: { without: /[0-9]/, message: "Only Letters" }
end
