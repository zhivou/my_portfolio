class MyAsset < ApplicationRecord
  self.table_name = 'assets'
  belongs_to :financial_type
  scope :current, -> { where(current: true) }
end
