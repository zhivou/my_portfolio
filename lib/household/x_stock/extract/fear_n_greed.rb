module Household
  module XStock
    module Extract
      class FearNGreed
        BASE_URL = 'https://money.cnn.com/data/fear-and-greed/'
        REGEX = /id="needleChart[^<]+image:url\(&#39;([^<]+)&#39;\);/

        def initialize(data_loader)
          @data_loader = data_loader
        end

        def image_url
          text = @data_loader.get_text(BASE_URL)
          text.scan(REGEX).first.first
        end
      end
    end
  end
end
