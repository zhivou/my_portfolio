class MainSkillsController < ApplicationController
  before_action :set_skill, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new, :edit, :update, :destroy]

  #
  # TODO Change this. Create new Scuffold - Settings, move all user settings there
  #
  def index
    @main_skills = MainSkill.all
  end

  def api_hard_skills
    render json: MainSkill.where(hard: true)
  end

  def api_soft_skills
    render json: MainSkill.where(hard: false)
  end

  def show
  end

  def new
    @main_skill = MainSkill.new
  end

  def edit
  end

  def create
    @main_skill = MainSkill.new(skill_params)

    respond_to do |format|
      if @main_skill.save
        format.html { redirect_to edit_user_registration_path }
        format.json { render :show, status: :created, location: @main_skill }
        format.js
      else
        format.html { render :new }
        format.json { render json: @main_skill.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @main_skill.update(skill_params)
        format.html { redirect_to edit_user_registration_path }
        format.json { render :show, status: :ok, location: @main_skill }
        format.js
      else
        format.html { render :edit }
        format.json { render json: @main_skill.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @main_skill.destroy
    respond_to do |format|
      format.html { redirect_to edit_user_registration_path }
      format.json { head :no_content }
    end
  end

  private
  def set_skill
    @main_skill = MainSkill.find(params[:id])
  end

  def skill_params
    params.require(:main_skill).permit(:name, :percent, :hard)
  end
end
