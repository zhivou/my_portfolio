class StaticPagesController < ApplicationController
  def resume
    @experience = Experience.all
    @skills = Skill.all
    @educations = Education.all
  end

  def contact
  end
end
