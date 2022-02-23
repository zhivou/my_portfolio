class MyAsset < ApplicationRecord
  self.table_name = 'assets'
  belongs_to :financial_type
  scope :current, -> { where(current: true) }

  def self.asset_with_types
    find_by_sql("
      SELECT assets.*
      FROM assets
      LEFT JOIN financial_types ON financial_types.id = assets.financial_type_id
      WHERE assets.current = true
    ")
  end
end
