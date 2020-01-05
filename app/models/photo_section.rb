class PhotoSection < ApplicationRecord
  belongs_to :photo, inverse_of: :photo_sections
end
