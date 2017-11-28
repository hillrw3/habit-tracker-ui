require 'spec_helper'

describe "Habits" do
  before do
      login
      visit root_path
  end

  describe 'Viewing existing habits' do
    it 'displays a list of habits with the target goal and how close you are' do
      within '.habits' do
        expect(page).to have_content '1/2 go on a run'
        expect(page).to have_content '0/1 vacuum'
      end
    end
  end
end