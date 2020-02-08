class HomeController < ApplicationController
  def index
    @latest_blogs = Blog.order(id: :desc).limit(6)
    @latest_projects = Project.order(id: :desc).limit(6)
    gon.exp = init_exp_js_data
  end

  private
  def init_exp_js_data
    experiences = Experience.order("sort ASC")
    result = []
    experiences.each do |e|
      result << {
          id: e.id,
          title: e.title,
          organization: e.organization,
          date_started: e.date_started,
          date_ended: e.date_ended,
          sort: e.sort,
          exp_body: e.exp_body.to_plain_text.first(300) + '...'
      }
    end
    result
  end
end
