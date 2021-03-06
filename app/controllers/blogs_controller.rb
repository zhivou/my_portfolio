class BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new, :edit, :update, :destroy]

  # GET /blogs
  # GET /blogs.json
  def index
    @blogs = Blog.order("created_at DESC")
    @all_tags = Tag.get_tags_count
    @tags_for_meta = []
    Tag.all.select("description").each { |element| @tags_for_meta << element.description}
  end

  def api_index
    page = params[:page]
    page_size = params[:page_size]
    blogs = Blog.blogs_with_date(params[:date]).page(page).per(page_size)

    has_more_items = {
      hasMoreItems: !blogs.last_page?,
      nextPage: blogs.next_page
    }
    blogs = Blog.blogs_and_body_date(params[:date]).page(page).per(page_size)
    render json: [has_more_items, blogs]
  end

  def api_translate_body_to_short
    render json: Blog.find(params[:blog_id]).body_area.to_plain_text.first(250)
  end

  def api_tags
    render json: Tag.get_tags_active_r_count
  end

  def api_search_tags
    render json: Blog.blogs_body_tags(params[:tag_name])
  end

  def api_get_random
    render json: Blog.limit(6)
  end

  # GET /blogs/1
  # GET /blogs/1.json
  def show
  end

  # GET /blogs/new
  def new
    @blog = Blog.new
  end

  # GET /blogs/1/edit
  def edit
  end

  # POST /blogs
  # POST /blogs.json
  def create
    @blog = Blog.new(blog_params)

    respond_to do |format|
      if @blog.save
        @blog.short_body = @blog.body_area.to_plain_text.first(250)
        @blog.save!
        format.html { redirect_to @blog, notice: 'Blog was successfully created.' }
        format.json { render :show, status: :created, location: @blog }
      else
        format.html { render :new }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blogs/1
  # PATCH/PUT /blogs/1.json
  def update
    respond_to do |format|
      if @blog.update(blog_params)
        @blog.short_body = @blog.body_area.to_plain_text.first(250)
        @blog.save!
        format.html { redirect_to @blog, notice: 'Blog was successfully updated.' }
        format.json { render :show, status: :ok, location: @blog }
      else
        format.html { render :edit }
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blogs/1
  # DELETE /blogs/1.json
  def destroy
    @blog.destroy
    respond_to do |format|
      format.html { redirect_to blogs_url, notice: 'Blog was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def blog_params
      params.require(:blog).permit(:title,
                                   :blog_id,
                                   :main_image,
                                   :body_area,
                                   :tag_name,
                                   :date,
                                   :page_size,
                                   tags_attributes: [:id, :description, :_destroy]
      )
    end
end
