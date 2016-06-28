class DownloadController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    p current_user

    @u = User.all()
    @papers = Paper.all()
  end

  # download file
  def download
    file_id = params[:id]

    p file_id

    paper = Paper.find(file_id)

    p current_user

    if paper.user == current_user
      attachment = paper.attachment

      send_data attachment.read, filename: attachment.file.filename, type:  attachment.file.content_type, disposition: 'attachment', stream: 'true', buffer_size: '4096'
    else
      render :json => {:message => "You don't have permission to access this file"}
    end
  end

end
