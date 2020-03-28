json.extract! expense, :id, :name, :monthly_payment, :current, :notes, :year_amount, :created_at, :updated_at
json.url expense_url(expense, format: :json)
