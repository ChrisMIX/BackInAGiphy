class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    session.clear if User.all.count == 0 && session[:user_id]
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
    @current_user
  end
  helper_method :current_user

#take us to the login unless we are logged in
  def authorize
    redirect_to '/' unless current_user
  end
end
