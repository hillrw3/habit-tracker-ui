require 'spec_helper'

describe 'the home page' do
  before do
    visit root_path
  end

  it 'has a delightful little greeting' do
    expect(page).to have_content 'HabitTracker'
  end
end