helpers do
  def current_player
    Player.find_by_id(session[:id])
  end

  # def player1_name
  # 	Player.find_by_name(session[:name])
  # end

  # def player2_name
  # 	Player.find_by_name(session[:name])
  # end
end