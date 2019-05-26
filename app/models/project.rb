class Project < ApplicationRecord

  has_rich_text :project_content

  ##
  # USed for Project sorting
  #
  def self.by_position
    order("position ASC")
  end
end
