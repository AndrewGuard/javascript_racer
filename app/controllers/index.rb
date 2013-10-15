get '/' do
  erb :index
end

get '/race' do
	erb :race
end

post '/authuser' do
  if current_player
    redirect to '/race' 
  else
    @player = Player.find_by_user_name(params[:user_name])
  end
end