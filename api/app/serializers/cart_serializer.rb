class CartSerializer < ActiveModel::Serializer
  attributes  :name, :quantity, :active

  def product
    product = Product.find(object.id)
    {
      id: product.id,
      image_url: product.image_url,
      name: product.name,
      description: product.description
    }
  end
end
