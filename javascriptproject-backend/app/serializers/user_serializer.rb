class UserSerializer

  def initialize(user_object) 
    @user = user_object
  end 

  def to_serialized_json
    options = {
      only: [:id, :username, :password_digest, :name, :won_adventure_1, :won_adventure_2, :won_adventure_3, :won_adventure_4]
    }
    @user.to_json(options)
  end 

end
