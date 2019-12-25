class StaticPagesController < ApplicationController

  def resume
    @experience = Experience.order("id DESC")
    @skills = Skill.all
    @educations = Education.all
    @avatar = User.first
  end
end
