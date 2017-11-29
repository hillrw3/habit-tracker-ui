require 'spec_helper'

describe "Habits" do

  describe 'Viewing existing habits' do
    context 'with no existing habits' do
      it 'displays a stock message' do
        login('no_habits')
        visit root_path

        expect(page).to have_content 'Make some habits!!'
      end
    end

    it 'displays a list of habits with the target goal and how close you are' do
      login
      visit root_path

      within '.habits' do
        expect(page).to have_content '1/2 go on a run'
        expect(page).to have_content '0/1 vacuum'
      end
    end
  end
end