module Household
  module Refresh
    class FearNGreed
      def image_path(logger: nil)
        stored_image_url = '/img/fear-and-greed.png'
        stored_image_path = "#{Rails.root}/public#{stored_image_url}"

        begin
          expires_in = File.exist?(stored_image_path) ? 1.hour : nil
          extractor = Household::Extract::FearNGreed.new(loader)
          source_image_url = extractor.image_url

          if source_image_url.present?
            loader.download(source_image_url, stored_image_path)
          end
        rescue Exception => e
          puts(e)
        end

        stored_image_path
      end

      def loader
        Household::DataLoader.new()
      end
    end
  end
end
