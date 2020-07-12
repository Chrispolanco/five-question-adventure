class AdventureSerializer

  def initialize(adventure_object) 
    @adventure = adventure_object
  end 

  def to_serialized_json
    options = {
      include: {
        hero: {
          except: [:updated_at, :created_at]
        }
      }, 
      except: [:updated_at, :created_at]
    }
    @adventure.to_json(options)
  end


end
