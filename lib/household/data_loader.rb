require 'net/http'

module Household
  class DataLoader
    TEXT_CONTENT_TYPES = %w[application/json text/html]

    def http_get(url, headers = {})
      uri = URI(url)
      request = Net::HTTP::Get.new(uri)
      headers.each { |key, value| request[key] = value }
      http = Net::HTTP.new(uri.hostname, uri.port)
      http.use_ssl = uri.scheme == 'https'
      http.request(request)
    end

    def get_text(url, headers = {})
      response = http_get(url, headers)
      validate!(response, url)
      return unless response.is_a?(Net::HTTPSuccess)

      response.body
    end

    def download(url, path = nil)
      response = fetch(url)
      validate!(response, url)
      return unless response.is_a?(Net::HTTPSuccess)

      if path
        File.open(path, 'wb') { |file| file << response.body } unless response.body.size.zero?
      else
        response.body
      end
    end

    def fetch(url, headers = {}, limit: 10)
      raise 'Too Many Redirects' if limit.zero?

      response = http_get(url, headers)
      if response.is_a?(Net::HTTPRedirection)
        fetch(response['location'], headers, limit: limit - 1)
      else
        response
      end
    end

    def validate!(response, url)
      log_info("#{response.code} #{url}")
      is_text = TEXT_CONTENT_TYPES.include?(response.content_type)
      log_info("(#{response.content_type}, #{response.body.size} bytes): #{is_text ? response.body : '<binary>'}")
      raise "#{response.code} - #{response.body}" if response.code != '200'
    end

    def log_info(value)
      puts value
    end
  end
end
