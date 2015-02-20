class Area < ActiveRecord::Base 
  set_rgeo_factory_for_column(:geometry, RGeo::Geographic.spherical_factory(:srid => 4326))

  def self.contains?(lat, lon)
    where("ST_Contains(geometry, ST_GeomFromText('POINT(#{lat} #{lon})'))")
  end

  def region_contains?(lat, lon)
  	query = "select * from areas where st_contains(geometry, ST_GeomFromText('POINT(#{lat} #{lon})'))"
  end
end


# inserting polygon record
# Area.new(name: "sdfasd", geometry: "POLYGON((-149.737965876574 61.1952881991104,
#  -149.71848377896 61.1953198415937, -149.718483761252 61.1952938698801, 
#  -149.718483872402 61.1951924591105, -149.737965876574 61.1952881991104))")