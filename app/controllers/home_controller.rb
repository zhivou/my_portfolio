class HomeController < ApplicationController
  def index
    @latest_blogs = Blog.order(id: :desc).limit(6)
    @latest_projects = Project.order(id: :desc).limit(6)
  end
end
