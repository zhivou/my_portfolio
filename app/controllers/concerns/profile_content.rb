module ProfileContent
  extend ActiveSupport::Concern

  DATA_PATH = "db/data/avatar_card.json"

  included do
    before_action :set_data
  end

  def set_data
    if File.exist?(DATA_PATH)
      @data_file = JSON.parse(File.read(DATA_PATH))
    else
      @data_file = nil
    end
  end
end
