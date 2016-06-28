class UploadController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  def index
    p current_user

    @u = User.all()

  end

  def create_document
    puts document_params
    @document = Document.new(document_params)
    #
    # if @document.save
    #   redirect_to documents_path, notice: "The document has been uploaded."
    # end
    render :json => {:message => "Create document..."}


  end

private
  def document_params
    params.permit(:file)
  end

end
