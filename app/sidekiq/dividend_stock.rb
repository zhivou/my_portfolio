class XStocks::DividendStock
  include Sidekiq::Job

  def tags
    ['Dividend.com']
  end

  def perform(*args)
    # Do something
  end
end
