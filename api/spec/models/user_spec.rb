require "rails_helper"

RSpec.describe User do
    it "can be created successfully with valid data" do
        user = User.create(username: "test_user", email: "testexample@gmail.com", password: "sup3r-secret")
        expect(user).to be_valid
    end

    it "has many orders" do
        expect(User.new).to respond_to(:orders)
    end

    describe "validations" do
        it { is_expected.to validate_presence_of(:username) }
        it { is_expected.to validate_presence_of(:password) }
        it { is_expected.to validate_uniqueness_of(:username) }
        
      end
      

    describe "authenticate" do
        it "returns the user if credentials match" do
            user = User.create(username: "test_user", password: "sup3r-secret")
            expect(user.authenticate("sup3r-secret")).to eq(user)
        end

        it "returns false if credentials don't match" do
            user = User.create(username: "test_user", password: "sup3r-secret")
            expect(user.authenticate("nope")).to be(false)
        end
    end

end