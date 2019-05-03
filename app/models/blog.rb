class Blog < ApplicationRecord
  has_many :pictures

  validates_presence_of :title, :body
end
