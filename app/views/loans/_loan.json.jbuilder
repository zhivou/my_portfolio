json.extract! loan, :id, :org_name, :months, :apr, :amount, :maturity_date, :maturity_amount, :monthly_payment, :current, :notes, :created_at, :updated_at
json.url loan_url(loan, format: :json)
