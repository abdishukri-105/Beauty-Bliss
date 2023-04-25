require "test_helper"

class BeautyProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @beauty_product = beauty_products(:one)
  end

  test "should get index" do
    get beauty_products_url, as: :json
    assert_response :success
  end

  test "should create beauty_product" do
    assert_difference("BeautyProduct.count") do
      post beauty_products_url, params: { beauty_product: { category: @beauty_product.category, description: @beauty_product.description, image_url: @beauty_product.image_url, name: @beauty_product.name, price: @beauty_product.price, qty: @beauty_product.qty, user_id: @beauty_product.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show beauty_product" do
    get beauty_product_url(@beauty_product), as: :json
    assert_response :success
  end

  test "should update beauty_product" do
    patch beauty_product_url(@beauty_product), params: { beauty_product: { category: @beauty_product.category, description: @beauty_product.description, image_url: @beauty_product.image_url, name: @beauty_product.name, price: @beauty_product.price, qty: @beauty_product.qty, user_id: @beauty_product.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy beauty_product" do
    assert_difference("BeautyProduct.count", -1) do
      delete beauty_product_url(@beauty_product), as: :json
    end

    assert_response :no_content
  end
end
