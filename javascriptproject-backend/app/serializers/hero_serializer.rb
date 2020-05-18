class HeroSerializer

  def initialize(hero_object) 
    @hero = hero_object
  end 

  def to_serialized_json
    options = {
      include: {
        adventures: {
          except: [:updated_at, :created_at]
        }
      }, 
      only: [:name, :character_class, :age, :health, :id]
    }
    @hero.to_json(options)
  end 

end



