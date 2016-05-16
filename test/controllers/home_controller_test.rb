require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get gdansk" do
    get :gdansk
    assert_response :success
  end

  test "should get gdynia" do
    get :gdynia
    assert_response :success
  end

  test "should get sopot" do
    get :sopot
    assert_response :success
  end

end
