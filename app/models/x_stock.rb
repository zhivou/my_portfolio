class XStock < ApplicationRecord
  scope :current, -> { where(current: true) }
end
