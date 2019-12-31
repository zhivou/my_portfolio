class Experience < ApplicationRecord

  has_rich_text :exp_body

  validates_presence_of :title,
                        :organization,
                        :date_started,
                        :location,
                        :exp_body,
                        :sort

end
