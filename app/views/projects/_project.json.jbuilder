json.extract! project, :id, :name, :body, :main_image, :thumb_image, :position, :created_at, :updated_at
json.url project_url(project, format: :json)
