json.extract! photo, :id, :name, :width, :height, :created_at, :updated_at
json.url photo_url(photo, format: :json)
