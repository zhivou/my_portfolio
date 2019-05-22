class Education < ApplicationRecord

  validates_presence_of :school,
                        :degree

end
