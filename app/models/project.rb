class Project < ApplicationRecord

  has_rich_text :project_content
  has_one_attached :main_image

  validates_presence_of :title,
                        :project_content

  ##
  # USed for Project sorting
  #
  def self.by_position
    order("position ASC")
  end
end
