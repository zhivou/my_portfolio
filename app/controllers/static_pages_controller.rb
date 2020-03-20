class StaticPagesController < ApplicationController

  def resume
    @experience = Experience.order("sort ASC")
    @skills = Skill.all
    @educations = Education.all
    @avatar = User.first
  end

  def dashboard
  end
end
