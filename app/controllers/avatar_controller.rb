class AvatarController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    hash = avatar_params.to_hash

    respond_to do |format|
      json_writer(hash)
      image
      format.html { redirect_to root_path, notice: 'Profile was successfully created' }
    end
  end

  def image
    blob = ActiveStorage::Blob.create_after_upload!(
        io: avatar_params[:attachments],
        filename: avatar_params[:attachments].original_filename,
        content_type: avatar_params[:attachments].content_type
    )

    render json: { filelink: url_for(blob) }
  end

  private
  def json_writer(hash)
    File.open(DATA_PATH,"w") do |f|
      f.write(JSON.pretty_generate(hash))
    end
  end

  def avatar_params
    params.require(:avatar).permit(:path, :name, :title, :short_about, attachments: [])
  end
end
