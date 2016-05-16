require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get gdansk" do
    get :gdansk
    assert_response :success
  end

  test "should get gdansk_bary" do
    get :gdansk_bary
    assert_response :success
  end

  test "should get gdansk_kawiarnie" do
    get :gdansk_kawiarnie
    assert_response :success
  end

  test "should get gdansk_restauracje" do
    get :gdansk_restauracje
    assert_response :success
  end

  test "should get sopot" do
    get :sopot
    assert_response :success
  end

  test "should get sopot_bary" do
    get :sopot_bary
    assert_response :success
  end

  test "should get sopot_kawiarnie" do
    get :sopot_kawiarnie
    assert_response :success
  end

  test "should get sopot_restauracje" do
    get :sopot_restauracje
    assert_response :success
  end

  test "should get gdynia" do
    get :gdynia
    assert_response :success
  end

  test "should get gdynia_bary" do
    get :gdynia_bary
    assert_response :success
  end

  test "should get gdynia_kawiarnie" do
    get :gdynia_kawiarnie
    assert_response :success
  end

  test "should get gdynia_restauracje" do
    get :gdynia_restauracje
    assert_response :success
  end

end
