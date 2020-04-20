class HeroSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :character_class, :age, :health
end

