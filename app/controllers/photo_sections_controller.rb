class PhotoSectionsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :edit, :update, :destroy]
  before_action :set_photo_section, only: [:show, :edit, :update, :destroy]

  # GET /photo_sections
  # GET /photo_sections.json
  def index
    @photo_sections = PhotoSection.all
  end

  # GET /photo_sections/1
  # GET /photo_sections/1.json
  def show
  end

  # GET /photo_sections/new
  def new
    @photo_section = PhotoSection.new
  end

  # GET /photo_sections/1/edit
  def edit
  end

  # POST /photo_sections
  # POST /photo_sections.json
  def create
    @photo_section = PhotoSection.new(photo_section_params)

    respond_to do |format|
      if @photo_section.save
        format.html { redirect_to @photo_section, notice: 'Photo section was successfully created.' }
        format.json { render :show, status: :created, location: @photo_section }
      else
        format.html { render :new }
        format.json { render json: @photo_section.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /photo_sections/1
  # PATCH/PUT /photo_sections/1.json
  def update
    respond_to do |format|
      if @photo_section.update(photo_section_params)
        format.html { redirect_to @photo_section, notice: 'Photo section was successfully updated.' }
        format.json { render :show, status: :ok, location: @photo_section }
      else
        format.html { render :edit }
        format.json { render json: @photo_section.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /photo_sections/1
  # DELETE /photo_sections/1.json
  def destroy
    @photo_section.destroy
    respond_to do |format|
      format.html { redirect_to photo_sections_url, notice: 'Photo section was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def photos_key_words
    unique_names = []
    PhotoSection.all.each do |keyword|
      name = keyword.name
      unique_names << name unless unique_names.include?(name)
    end

    render json: unique_names
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo_section
      @photo_section = PhotoSection.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def photo_section_params
      params.require(:photo_section).permit(:name, :photo_id)
    end
end
