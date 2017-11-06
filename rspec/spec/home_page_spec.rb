require 'spec_helper'

describe 'the home page' do
  it 'has a delightful little greeting' do
    visit root_path
    expect(page).to have_content 'HabitTracker'
  end

  context 'with an authenticated user' do
    it 'displays a list of tracked habits' do
      login

      visit root_path

      within('.habits') do
        expect(page).to have_content 'Your Habits'
        expect(page).to have_content 'go on a run'
      end
    end
  end
end