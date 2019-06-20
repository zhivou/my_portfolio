class ContactForm < MailForm::Base
  attributes :name,  :validate => true
  attributes :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attributes :message
  attribute :nickname,  :captcha  => true

  ##
  # Just here as an example for future type functionality. TODO remove
  #
  def interface_bug?
    if type == 'Interface bug' && screenshot.nil?
      self.errors.add(:screenshot, "can't be blank on interface bugs")
    end
  end

  def headers
    {
        :subject => "My Portfolio Contact",
        :to => "zivou4@gmail.com", #TODO change this to user email
        :from => %("#{name}" <#{email}>)
    }
  end
end