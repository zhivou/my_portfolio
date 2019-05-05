module ProfileContent
  extend ActiveSupport::Concern

  DATA_PATH = "db/data/avatar_card.yml"

  included do
    before_action :set_data
  end

  def set_data
    #TODO continue here, change it to json(something is wrong about this YAML file writing)
    if File.exist?(DATA_PATH)
      @data_file = YAML::load(File.open(DATA_PATH))
    end
  end

  def self.save(file_to_save)
    File.open(file_to_save, "r+") do |file|
      file.write(file_to_save.to_yaml)
    end
  end
end
