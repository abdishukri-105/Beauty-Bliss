class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :image_url, :category
  belongs_to :user
end
