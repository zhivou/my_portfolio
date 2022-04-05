class XCompany < ApplicationRecord
  scope :current, -> { where(current: true) }
end
