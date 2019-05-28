class Tag < ApplicationRecord
  belongs_to :blog, inverse_of: :tags

  ##
  # Queries DB to get all tags with count
  # without duplications
  #
  def self.get_tags_count
    Tag.find_by_sql(
        "SELECT description
        ,COUNT(*) as total
         FROM tags
         LEFT JOIN blogs ON tags.blog_id = blogs.id
         GROUP BY description"
    )
  end
end
