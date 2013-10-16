helpers do
  def current_player
    Player.find_by_id(session[:id])
  end
end