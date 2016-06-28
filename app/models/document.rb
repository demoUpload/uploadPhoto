class Document < ActiveRecord::Base
    mount_uploader :file, DocumentUploader
    # attr_accessible :file
    belongs_to :user
end
