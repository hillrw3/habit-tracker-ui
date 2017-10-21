require 'httparty'
require_relative './navigation'
require_relative './mock_api'

class SpecRunner
  extend Navigation
  extend MockServer

  def self.start
    Process.spawn("cd .. && webpack-dev-server --port=#{ui_port} --env.API_URL=http://localhost:3001 > /dev/null")
    Process.spawn("cd #{api_path} && ruby mock_api.rb > /dev/null")
    started = false

    10.times do
      begin
        ui_response = HTTParty.get("http://localhost:#{ui_port}")
        api_response = HTTParty.get("http://localhost:#{api_port}/ping")

        if ui_response.success? && api_response.success?
          started = true
          break
        end
      rescue Errno::ECONNREFUSED
        sleep 1
      end
    end

    unless started
      raise 'React or Sinatra failed to start'
    end
  end

  def self.stop
    kill_ui
    kill_api
  end

  def self.kill_ui
    ui_pid = `lsof -i:#{ui_port} -t`
    `kill #{ui_pid}` if ui_pid.length > 1
  end

  def self.kill_api
    api_pid = `lsof -i:#{api_port} -t`
    `kill #{api_pid}` if api_pid.length > 1
  end
end