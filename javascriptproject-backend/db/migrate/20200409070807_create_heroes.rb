class CreateHeroes < ActiveRecord::Migration[6.0]
  def change
    create_table :heroes do |t|
      t.string :name
      t.string :class
      t.integer :age
      t.integer :health

      t.timestamps
    end
  end
end
