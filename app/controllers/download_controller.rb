class DownloadController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :authenticate_user!

  def index
    p current_user

    # IMAGES_PATH = File.join(Rails.root, "public")

    send_file(File.join(File.join(Rails.root, "public"), "favicon.ico"))
  end

end
