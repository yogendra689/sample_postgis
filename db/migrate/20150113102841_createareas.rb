class Createareas < ActiveRecord::Migration
  def self.up
    create_table :areas do |t|
      t.string :name         
      t.references :account 
      t.string :color
      t.string :description
      t.polygon :geometry, :geographic => true, :srid => 4326
      t.timestamps
    end

    add_index :areas, :name
    add_index :areas, :geometry, :spatial => true
  end

  def self.down
    drop_table :areas
  end  
end
