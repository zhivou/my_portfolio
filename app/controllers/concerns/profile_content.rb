module ProfileContent
  extend ActiveSupport::Concern

  DATA_PATH = "db/data/avatar_card.yml"

  included do
    before_action :set_data
  end

  def self.set_data
    if File.exist?(DATA_PATH)
      @data_file = YAML::load(File.open(DATA_PATH))
    end
    p ''
  end

  def self.save(file_to_save)
    File.open(file_to_save, "r+") do |file|
      file.write(your_account.to_yaml)
    end
  end
end
