class ManagerJob < ApplicationRecord
  has_rich_text :description
  before_save :default_values
  validates_presence_of :title, :organization

  def default_values
    self.replied ||= false
    self.interview ||= false
  end

  def self.simple_search(phrase)
    if phrase
      where("title LIKE ?", "%#{phrase}%")
          .or(where("title LIKE ?", "%#{phrase.capitalize}%"))
          .or(where("organization LIKE ?", "%#{phrase}%"))
          .or(where("organization LIKE ?", "%#{phrase.capitalize}%"))
    else
      all
    end
  end
end
