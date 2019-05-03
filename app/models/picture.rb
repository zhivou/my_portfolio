class Picture < ApplicationRecord
  belongs_to :blog, optional: true

  validates_presence_of :path
end
