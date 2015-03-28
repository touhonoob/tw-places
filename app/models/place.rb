class Place
  include Mongoid::Document
  field :gov_id, type: String
  field :name, type: String
  field :zone, type: String
  field :toldescribe, type: String
  field :description, type: String
  field :tel, type: String
  field :add, type: String
  field :zipcode, type: String
  field :travellinginfo, type: String
  field :opentime, type: String
  field :picture1, type: String
  field :picdescribe1, type: String
  field :picture2, type: String
  field :picdescribe2, type: String
  field :picture3, type: String
  field :picdescribe3, type: String
  field :map, type: String
  field :gov, type: String
  field :px, type: String
  field :py, type: String
  field :orgclass, type: String
  field :class1, type: String
  field :class2, type: String
  field :class3, type: String
  field :level, type: String
  field :website, type: String
  field :parkinginfo, type: String
  field :parkinginfo_px, type: String
  field :parkinginfo_py, type: String
  field :ticketinfo, type: String
  field :remarks, type: String
  field :keyword, type: String
  field :region, type: String
  field :town, type: String
end
