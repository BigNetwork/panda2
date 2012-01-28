class SlideshowController < ApplicationController
  
  def index
    @announcement = Announcement.first
  end
  
  def next
    
    previous_id = params[:id]
    
    previous_announcement = Announcement.find previous_id
    
    previous_position = previous_announcement.position
    
    next_position = previous_position + 1
    
    @announcement = Announcement.find_by_position next_position
    
    unless @announcement
      @announcement = Announcement.first
    end
    
    respond_to do |format|
      format.json { render json: @announcement }
    end
  end
  
end
