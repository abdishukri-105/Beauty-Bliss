require 'rails_helper'

# RSpec.describe Product, type: :model do
#     it 'is valid with valid attributes' do
#       product = Product.new(name: 'Product 1', price: 10.0)
#       expect(product).to be_valid
#     end
#   end


RSpec.describe Product, type: :model do
    it 'is valid with valid attributes' do
      user = User.create(username: 'test_user', password: 'password')
      product = user.products.new(name: 'Product 1', price: 10.0)
      expect(product).to be_valid
    end
  end
  

