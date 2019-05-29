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

  ##
  # Same like above but using
  # Active Record only
  #
  def self.get_tags_active_r_count
    Blog.joins(:tags).group("tags.description").count
  end

  ##
  # Get all Blogs based on Tag name
  #
  def self.get_all_blogs_by_tag(tag_name)
    Blog.joins(:tags).where(tags:{ description: "#{tag_name}" })
  end
end
