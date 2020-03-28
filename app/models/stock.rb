class Stock < ApplicationRecord
  belongs_to :financial_type

  def self.stocks_with_types
    find_by_sql("
      SELECT *, financial_types.name
      FROM stocks
      LEFT JOIN financial_types ON financial_types.id = stocks.financial_type_id
      WHERE stocks.current = true
    ")
  end
end
