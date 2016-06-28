class UploadController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  def index
    p current_user

    @u = User.all()

  end

  def create_paper
    @paper = Paper.new(paper_params)

    if @paper.save
      render :json => {:message => "Create document successful..."}
    else
      render :json => {:message => "Error..."}
    end

  end

private
  def paper_params
    params.permit(:attachment)
  end

end
