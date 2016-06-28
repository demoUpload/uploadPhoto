class Paper < ActiveRecord::Base
    mount_uploader :attachment, DocumentUploader
    belongs_to :user
end
