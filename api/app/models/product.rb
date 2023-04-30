class Product < ApplicationRecord
    belongs_to :user

    attribute :category, :string
end
