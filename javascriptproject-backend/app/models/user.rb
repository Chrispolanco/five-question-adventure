class User < ApplicationRecord

    validates :name, :username, presence: true 
    validates :name, :username, uniqueness: true 
    validates :name, :username, format: { without: /[0-9]/, message: "Only Letters" }

    has_secure_password 
end
