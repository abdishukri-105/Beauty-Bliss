# class CartSerializer < ActiveModel::Serializer
#   attributes  :quantity, :beauty_product_id
#   belongs_to :beauty_product, serializer: BeautyProductSerializer

#   # def product
#   #   product = BeautyProduct.find(object.id)
#   #   {
#   #     id: product.id,
#   #     image_url: product.image_url,
#   #     name: product.name,
#   #     description: product.description
#   #   }
#   # end

# end


class CartSerializer < ActiveModel::Serializer
  attributes :quantity, :beauty_product_id
  has_many :cart_items
  has_many :beauty_products, through: :cart_items
end

  