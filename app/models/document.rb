class Document < ActiveRecord::Base
    mount_uploader :file, DocumentUploader
    attr_accessible :file
end
