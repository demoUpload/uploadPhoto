class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :file
      t.string :name
      t.string :url

      t.timestamps null: false
    end
  end
end
