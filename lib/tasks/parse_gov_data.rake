desc "parse goverment's place api data"
task "parse_gov_place_api" => :environment do
  require 'open-uri'

  doc = Nokogiri::XML(open("http://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.xml"))

  infos = doc.xpath("//Info")

  infos_formatted_array = []
  infos.each do |info|
    _hash = {}
    info.each do |info_attr|
      key = info_attr[0].downcase
      _hash[:"#{key}"] = info_attr[1]
    end
    infos_formatted_array << _hash
  end
end