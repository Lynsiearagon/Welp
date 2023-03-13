json.restaurant do 
    json.extract! @restaurant, 
        :id, 
        :restaurant_name, 
        :cuisine, 
        :price, 
        :neighborhood, 
        :hours,
        :photo_url, 
        :amenities,
        :phone_number,
        :website_link, 
        :about_restaurant, 
        :street_address, 
        :city, 
        :state, 
        :zipcode, 
        :country,
        :menu_link,
        :latitude,
        :longitude,
        :updated_at, 
        :created_at
end