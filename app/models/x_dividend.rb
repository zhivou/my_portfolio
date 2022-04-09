class XDividend < ApplicationRecord
  scope :current, -> { where(current: true) }
end
