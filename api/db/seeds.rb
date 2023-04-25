puts "Seeding..."
 
# Product.destroy

# products = [

#   {
#     name: "Hyaluronic Acid Serum",
#     description: "This serum is packed with hyaluronic acid to hydrate and plump up your skin. It helps to reduce the appearance of fine lines and wrinkles, and leaves your skin looking and feeling smoother and more radiant.",
#     price: 29.99,
#     image_url: "https://example.com/images/hyaluronic_acid_serum.jpg",
#     category: "Serums"
#   },
#   {
#     name: "Charcoal Face Mask",
#     description: "This face mask is infused with charcoal to help purify and detoxify your skin. It helps to unclog pores and remove impurities, leaving your skin feeling refreshed and rejuvenated.",
#     price: 14.99,
#     image_url: "https://example.com/images/charcoal_face_mask.jpg",
#     category: "Masks"
#   },
#   {
#     name: "Vitamin C Serum",
#     description: "This serum is packed with vitamin C to brighten and even out your skin tone. It helps to reduce the appearance of dark spots and hyperpigmentation, and leaves your skin looking brighter and more youthful.",
#     price: 39.99,
#     image_url: "https://example.com/images/vitamin_c_serum.jpg",
#     category: "Serums"
#   },
#   {
#     name: "Rosewater Toner",
#     description: "This toner is made with rosewater to help soothe and hydrate your skin. It helps to balance your skin's pH and prepare it for the rest of your skincare routine. It can also be used throughout the day to refresh and revitalize your skin.",
#     price: 19.99,
#     image_url: "https://example.com/images/rosewater_toner.jpg",
#     category: "Toners"
#   },
#   {
#     name: "Anti-Aging Eye Cream",
#     description: "This eye cream is packed with antioxidants and peptides to help reduce the appearance of fine lines and wrinkles around your eyes. It helps to hydrate and firm up the delicate skin around your eyes, leaving it looking smoother and more youthful.",
#     price: 49.99,
#     image_url: "https://example.com/images/anti_aging_eye_cream.jpg",
#     category: "Eye Creams"
#   }
# ]
# products.rb

product1 = Product.create(
  name: "Apple iPhone 13",
  description: "The latest iPhone model with a new A15 Bionic chip and improved camera features.",
  price: 999.00,
  image_url: "https://example.com/iphone-13.jpg",
  category: "Electronics",
  user_id: 2
)
product2 = Product.create(
  name: "Nike Air Max 270",
  description: "A popular Nike shoe with a large air unit in the heel for extra comfort.",
  price: 150.00,
  image_url: "https://example.com/nike-air-max-270.jpg",
  category: "Footwear",
  user_id: 1
)

product3 = Product.create(
  name: "Lululemon Align Leggings",
  description: "A popular yoga pant from Lululemon made with their buttery soft Nulu fabric.",
  price: 98.00,
  image_url: "https://example.com/lululemon-align-leggings.jpg",
  category: "Athletic Apparel",
  user_id: 1
)

# # To create the products in the database
# products.each do |product|
#   Product.create(product)
# end

# Generate 2 users
User.create(username: "user1", email: "user1@example.com", password: "password1")
User.create(username: "user2", email: "user2@example.com", password: "password2")

  
puts "Done!!"