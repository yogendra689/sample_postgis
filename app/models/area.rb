class Area < ActiveRecord::Base 
  set_rgeo_factory_for_column(:geometry, RGeo::Geographic.spherical_factory(:srid => 4326))

  def self.contains?(lat, lon)
    where("ST_Contains(geometry, ST_GeomFromText('POINT(#{lat} #{lon})'))")
  end

  def region_contains?(lat, lon)
  	query = "select * from areas where st_contains(geometry, ST_GeomFromText('POINT(#{lat} #{lon})'))"
  end
end