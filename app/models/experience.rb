class Experience < ApplicationRecord

  validates_presence_of :title,
                        :organization,
                        :body,
                        :date_started,
                        :location

end
