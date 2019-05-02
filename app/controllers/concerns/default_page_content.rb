module DefaultPageContent
  extend ActiveSupport::Concern

  included do
    before_action :set_page_defaults
  end

  ##
  # Update Keywords if needed by adding it from tags in
  # forms
  #
  def set_page_defaults
    @page_title = "Resume | Dmitrii Skrylev Portfolio"
    @seo_keywords = "Dmitrii Skrylev Portfolio"
  end
end
