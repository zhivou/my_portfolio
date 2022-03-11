class WidgetImage < ApplicationRecord
  has_one_attached :w_image

  scope :h_ego, -> {
    where(wid_name: "fear_n_greed")
    .where('created_at >= ?', 1.hour.ago)
  }
end
