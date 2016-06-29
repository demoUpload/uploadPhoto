class UploadController < ApplicationController

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  def index
    @users = User.all()
  end

  def create_paper
    user = User.find_by_id(paper_params['user_id'])

    if user
      @paper = user.papers.new(paper_params)

      if @paper.save
        redirect_to url_for(:controller => :download, :action => :index), notice: 'Document was successfully created.'
      else
        redirect_to action: "index", notice: 'There is error occur.'
      end
    else
      redirect_to action: "index"
    end

  end

private
  def paper_params
    params.permit(:attachment, :user_id)
  end

end
