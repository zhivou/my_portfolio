class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :edit, :update, :destroy]

  # GET /photos
  # GET /photos.json
  def index
    @photos = Photo.all
  end

  # GET /photos/1
  # GET /photos/1.json
  def show
  end

  # GET /photos/new
  def new
    @photo = Photo.new
  end

  # GET /photos/1/edit
  def edit
  end

  # POST /photos
  # POST /photos.json
  def create
    @photo = Photo.new(photo_params)

    respond_to do |format|
      if @photo.save
        format.html { redirect_to @photo, notice: 'Photo was successfully created.' }
        format.json { render :show, status: :created, location: @photo }
      else
        format.html { render :new }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /photos/1
  # PATCH/PUT /photos/1.json
  def update
    respond_to do |format|
      if @photo.update(photo_params)
        format.html { redirect_to @photo, notice: 'Photo was successfully updated.' }
        format.json { render :show, status: :ok, location: @photo }
      else
        format.html { render :edit }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /photos/1
  # DELETE /photos/1.json
  def destroy
    @photo.destroy
    respond_to do |format|
      format.html { redirect_to photos_url, notice: 'Photo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def gallery_photos
    container = []
    search_phrase = params[:search_phrase]
    counter = 0

    case search_phrase
    when 'all'
      photos = Photo.order("created_at DESC")
    when 'new'
      photos = Photo.order("created_at DESC")
    when 'old'
      photos = Photo.order("created_at ASC")
    when nil
      photos = Photo.order("created_at DESC")
    else
      photos = Photo.joins(:photo_sections).where(photo_sections:{ name: "#{search_phrase}" })
    end

    photos.each do |p|
      container << {
        id: counter,
        name: p.name,
        width: p.width,
        height: p.height,
        src: url_for(p.picture)
      }
      counter +=1
    end
    sleep 1

    render json: container
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def photo_params
      params.require(:photo).permit(:name, :width, :height, :picture, :search_phrase, photo_sections_attributes: [:id, :name, :_destroy])
    end
end
