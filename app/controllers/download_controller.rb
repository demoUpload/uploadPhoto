class DownloadController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    p current_user

    @u = User.all()
    @documents = Document.all()
  end

  # download file
  def download
    file_id = params[:id]

    p file_id

    document = Document.find(file_id)

    p current_user

    if document.user == current_user
      file = open(document.url)
      send_data file.read, filename: document.name, type: document.file.content_type, disposition: 'attachment', stream: 'true', buffer_size: '4096'
    else
      render :json => {:message => "You don't have permission to access this file"}
    end
  end

end
