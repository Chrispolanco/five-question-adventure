class CreateHeros < ActiveRecord::Migration[6.0]
  def change
    create_table :heros do |t|
      t.string :name
      t.string :character_class
      t.integer :age
      t.integer :health

      t.timestamps
    end
  end
end
