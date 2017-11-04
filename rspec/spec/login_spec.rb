require 'spec_helper'

describe 'Login' do
  context 'on success' do
    it 'indicates the user is signed in and hides the login form' do
      visit root_path

      within('.login-form') do
        fill_in 'Username', with: 'bob'
        fill_in 'Password', with: 'password'
        click_on 'Submit'
      end

      expect(page).to have_content 'Hello, bob'
      expect(page).not_to have_css '.login-form'
    end
  end
end