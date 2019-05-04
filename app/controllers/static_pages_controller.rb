class StaticPagesController < ApplicationController
  def resume
    @experience = Experience.all
  end

  def contact
  end
end
