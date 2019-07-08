class HomeController < ApplicationController
  def index
    @latest_blogs = Blog.order(id: :asc).limit(6)
  end
end
