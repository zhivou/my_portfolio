module RecordTranslator
  extend ActiveSupport::Concern

  ##
  # This is for translating Active Text controller
  # to regular text
  # Call it as:
  # RecordTranslator.trim_tags(body)
  # Deprecated just use to_plain_text
  #
  def self.trim_tags(body)
    #Do something
  end
end