class CreatePapers < ActiveRecord::Migration
  def change
    create_table :papers do |t|
      t.string :name
      t.string :url
      t.string :attachment
    end
  end
end
