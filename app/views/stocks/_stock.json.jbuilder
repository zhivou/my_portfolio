json.extract! stock, :id, :name, :price, :current, :notes, :sold_date, :sold_price, :gain_loss, :created_at, :updated_at
json.url stock_url(stock, format: :json)
