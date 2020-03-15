json.extract! manager_job, :id, :organization, :title, :url, :interview, :replayed, :notes, :address, :created_at, :updated_at
json.url manager_job_url(manager_job, format: :json)
