class User < ApplicationRecord

    validates :name, :username, presence: true 
    validates :username, uniqueness: true 
    validates :name, format: { without: /[0-9]/, message: "Only Letters" }

    has_secure_password 
end
