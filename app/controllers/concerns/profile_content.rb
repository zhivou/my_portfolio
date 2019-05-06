module ProfileContent
  extend ActiveSupport::Concern

  ##
  # Due to small amount of data it was decided to save Avatar data in JSON file which
  # is located by default:
  #
  DATA_PATH = "db/data/avatar_card.json"

  included do
    before_action :set_data
  end

  def set_data
    if File.exist?(DATA_PATH)
      @data_file = JSON.parse(File.read(DATA_PATH))
    end
  end
end
