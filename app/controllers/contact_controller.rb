class ContactController < ApplicationController
  def index
    @contact = ContactForm.new
  end

  def create
    @contact = ContactForm.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Thank you for your message!'
    else
      flash.now[:error] = 'Cannot send message.'
      render :index
    end
  end

  private
  def contact_params
    params.require(:contact).permit(:name, :email, :message, :captcha)
  end
end
