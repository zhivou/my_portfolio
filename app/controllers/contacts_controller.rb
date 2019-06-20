class ContactsController < ApplicationController

  before_action :contact_params, only: [:create]

  def index
    @contact = ContactForm.new
  end

  def create
    @contact = ContactForm.new(params[:contact_form])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Thank you for your message!'
      render :index
    else
      flash.now[:error] = 'Cannot send message.'
      render :index
    end
  end

  private
  def contact_params
    params.require(:contact_form).permit(:name, :email, :message, :nickname, :captcha)
  end
end
