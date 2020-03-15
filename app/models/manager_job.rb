class ManagerJob < ApplicationRecord
  has_rich_text :description
  before_save :default_values
  validates_presence_of :title, :organization

  def default_values
    self.replied ||= false
    self.interview ||= false
  end
end
