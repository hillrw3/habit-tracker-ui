require 'sinatra'
require 'sinatra/cors'

API_PORT = 3001

set :port, API_PORT
set :allow_origin, "*"
set :allow_headers, "content-type, x-auth-token"
set :allow_methods, "GET,HEAD,POST,PUT,DELETE"

get '/ping' do
end

post '/login' do
  {token: 'superSecure'}.to_json
end

get '/habits' do
  [
      {'id' => 1, 'title' => 'go on a run', 'target_frequency' => 2, 'actual_frequency' => 1},
      {'id'=> 2, 'title' => 'vacuum', 'target_frequency' => 1, 'actual_frequency' => 0}
  ].to_json
end

module MockServer
  def api_port
    API_PORT
  end

  def api_path
    File.dirname(__FILE__)
  end
end