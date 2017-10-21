require 'sinatra'
require 'sinatra/cors'

API_PORT = 3000

set :port, API_PORT
set :allow_origin, "*"
set :allow_headers, "content-type"
set :allow_methods, "GET,HEAD,POST,PUT,DELETE"

get '/ping' do
end

post '/login' do
  {token: 'superSecure'}.to_json
end

module MockServer
  def api_port
    API_PORT
  end

  def api_path
    File.dirname(__FILE__)
  end
end