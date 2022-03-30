class XCrypto < ApplicationRecord
  scope :current, -> { where(current: true) }
end
