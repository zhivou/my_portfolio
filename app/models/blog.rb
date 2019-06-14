class Blog < ApplicationRecord
  has_one_attached :main_image
  has_rich_text :body_area

  has_many :tags, inverse_of: :blog

  validates_presence_of :title, :body_area

  accepts_nested_attributes_for :tags, allow_destroy: true

  ##
  # Returns Blogs with particular description name
  #
  def self.get_blogs_with_tag(tag_name)
    self.where(:description)
  end

  def self.blogs_and_body
    ActionTextRichText
        .joins("RIGHT JOIN blogs ON blogs.id = action_text_rich_texts.record_id")
        .select("blogs.*, action_text_rich_texts.body")
        .group("blogs.id, action_text_rich_texts.body")
        .order("blogs.created_at DESC")
  end

  def self.blogs_and_body_date(date)
    ActionTextRichText
        .joins("RIGHT JOIN blogs ON blogs.id = action_text_rich_texts.record_id")
        .select("blogs.*, action_text_rich_texts.body")
        .group("blogs.id, action_text_rich_texts.body")
        .where("blogs.created_at =< '#{date}'")
        .order("blogs.created_at DESC")
  end

  def self.blogs_body_tags(tag_description)
    ActionTextRichText
        .joins("INNER JOIN blogs ON blogs.id = action_text_rich_texts.record_id")
        .joins("INNER JOIN tags ON blogs.id = tags.blog_id")
        .where("tags.description = '#{tag_description}'")
        .select("blogs.*, action_text_rich_texts.body, tags.description")
        .order("blogs.created_at DESC")
  end
end
