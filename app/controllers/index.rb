get '/' do
  erb :index
end

get '/race' do
	erb :race
end

post '/authuser' do
	p params[:user_name1].empty? || params[:user_name2].empty?
	if params[:user_name1].empty? || params[:user_name2].empty?
		@error = "Try again."
		erb :index
	else
		@player1 = Player.find_or_create_by_name(params[:user_name1])
  	@player2 = Player.find_or_create_by_name(params[:user_name2])
  	@game = Game.create(player1_id: @player1.id, player2_id: @player2.id)
		erb :race	
	end
end

post '/winner' do
	@game = Game.find(params[:game_id])
	@game.update_attributes(winner: params[:winner_name], duration: params[:time])
	"update successful"
end