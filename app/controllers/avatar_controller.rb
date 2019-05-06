class AvatarController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    json_writer(experience_params)

    respond_to do |format|
      json_writer(@data_file)
      format.html { redirect_to root_path, notice: 'Profile was successfully created' }
    end
  end

  private
  def json_writer(hash)
    File.open(DATA_PATH,"w") do |f|
      f.write(JSON.pretty_generate(hash))
    end
  end

  def experience_params
    params.require(:avatar).permit(:path, :name, :title, :short_about)
  end
end
