class Photo < ApplicationRecord
  has_one_attached :picture

  has_many :photo_sections
  accepts_nested_attributes_for :photo_sections,
                                allow_destroy: true,
                                reject_if: lambda { |attrs| attrs['name'].blank? }
end
