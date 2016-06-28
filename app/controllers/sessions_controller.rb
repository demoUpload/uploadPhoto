class SessionsController < Devise::SessionsController
    respond_to :json
    # prepend_before_filter :require_no_authentication, only: [:new, :create, :cancel]
end
