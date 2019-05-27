class Tag < ApplicationRecord
  belongs_to :blog, inverse_of: :tags
end
