get '/' do
  erb :index
end

get '/race/:player1_id/:player2_id' do
	@player1 = Player.find(params[:player1_id])
  @player2 = Player.find(params[:player2_id])
  @game = Game.create(player1_id: @player1.id, player2_id: @player2.id)
	erb :race
end

post '/authuser' do
	if params[:user_name1].empty? || params[:user_name2].empty? 
		@error = "Try again."
		erb :index
	else
		@player1 = Player.find_or_create_by_name(params[:user_name1])
  	@player2 = Player.find_or_create_by_name(params[:user_name2])
		redirect to("/race/#{@player1.id}/#{@player2.id}")
	end
end

post '/winner' do
	@game = Game.find(params[:game_id])
	@game.update_attributes(winner: params[:winner_name], duration: params[:time])
end