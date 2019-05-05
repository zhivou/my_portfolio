class StaticPagesController < ApplicationController
  def resume
    @experience = Experience.all
    @skills = Skill.all
  end

  def contact
  end
end
