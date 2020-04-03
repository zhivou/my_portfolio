class Stock < ApplicationRecord
  belongs_to :financial_type

  CLIENT = IEX::Api::Client.new
  HELPER_PATH = 'app/models/stock_helpers/stock_prices.json'

  def self.stocks_with_types
    find_by_sql("
      SELECT *, financial_types.name
      FROM stocks
      LEFT JOIN financial_types ON financial_types.id = stocks.financial_type_id
      WHERE stocks.current = true
    ")
  end

  def self.calculate_total_investment
    where(current: true).sum(:price).to_f
  end

  def self.calculate_current_investment

    stocks = self.where(current: true)
    names = stocks.select(:name).group(:name).pluck(:name)
    result = 0

    names.each do |n|
      if Time.now > $stock_prices[:time] + 30.minutes || !$stock_prices[n]
        $stock_prices[n] = CLIENT.quote(n).latest_price.to_f
        $stock_prices[:time] = Time.now
        $stock_prices[:will_update_at] = Time.now + 30.minutes
      end
      result += stocks.where(name: n).count * $stock_prices[n]
    end

    result
  end

  def self.get_share_info_by_names
    model_helper = JSON.parse(File.read(HELPER_PATH))
    names = self.shares_by_name
    result = {}

    names.each do |n|
      if model_helper[n]
        # If within 30 minutes use already existed data. For saving API calls
        if Time.now < model_helper[n]['updated_at'].to_time + 30.minutes
          result = model_helper
          next
        end
        result[n] = self.create_price_holder(n)
      else
        result[n] = self.create_price_holder(n)
      end
    end

    self.write_to_json(result)
    return JSON.parse(File.read(HELPER_PATH)).values
  end

  def self.create_price_holder(n)
    holder = {}

    holder['quote'] = CLIENT.quote(n)
    holder['updated_at'] = Time.now
    holder['next_update'] = Time.now + 30.minutes
    holder[:totalSum] = self.calculate_total_investment_by_name(n)
    holder[:totalShares] = self.share_by_name_total(n)
    holder[:dividends] = CLIENT.dividends(n, '6m')
    holder[:logo] = CLIENT.logo(n)

    holder
  end

  ##
  # Returns all active stocks names
  #
  def self.shares_by_name
    where(current: true).select(:name).group(:name).pluck(:name)
  end

  ##
  # This returns all active stoks by provided name
  #
  def self.share_by_name_total(name)
    where(current:true, name: name).length
  end

  def self.calculate_total_investment_by_name(name)
    where(current: true, name: name).sum(:price).to_f
  end

  def self.calculater_total_sold_by_name(name)
    where(current: false, name: name).sum(:sold_price).to_f
  end

  def self.write_to_json(hash)
    File.open(HELPER_PATH,"w") do |f|
      f.write(hash.to_json)
    end
  end
end
