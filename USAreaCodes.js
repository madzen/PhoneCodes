var areaCodes = [
  { code: "201", country: "United States", state: "New Jersey", area: "Jersey City" },
  { code: "202", country: "United States", state: "District of Columbia", area: "(All Locations)" },
  { code: "203", country: "United States", state: "Connecticut", area: "Waterbury, New Haven, Bridgeport, Stamford" },
  { code: "204", country: "Canada", state: "Manitoba", area: "(All Locations)" },
  { code: "205", country: "United States", state: "Alabama", area: "Montgomery, Selma, Jackson" },
  { code: "206", country: "United States", state: "Washington", area: "Seattle" },
  { code: "207", country: "United States", state: "Maine", area: "(All Locations)" },
  { code: "208", country: "United States", state: "Idaho", area: "(All Locations)" },
  { code: "209", country: "United States", state: "California", area: "Stockton, Merced" },
  { code: "210", country: "United States", state: "Texas", area: "San Antonio" },
  { code: "212", country: "United States", state: "New York", area: "New York" },
  { code: "213", country: "United States", state: "California", area: "Los Angeles" },
  { code: "214", country: "United States", state: "Texas", area: "Dallas" },
  { code: "215", country: "United States", state: "Pennsylvania", area: "Philadelphia" },
  { code: "216", country: "United States", state: "Ohio", area: "Cleveland" },
  { code: "217", country: "United States", state: "Illinois", area: "Springfield, Decatur, Champaign" },
  { code: "218", country: "United States", state: "Minnesota", area: "Duluth, Brainerd, Grand Rapids, International Falls" },
  { code: "219", country: "United States", state: "Indiana", area: "Fort Wayne, South Bend, Gary" },
  { code: "225", country: "United States", state: "Louisiana", area: "Baton Rouge, New Roads" },
  { code: "228", country: "United States", state: "Mississippi", area: "Gulfport, Pascagoula" },
  { code: "229", country: "United States", state: "Georgia", area: "Albany, Americus, Bainbridge, Valdosta" },
  { code: "231", country: "United States", state: "Michigan", area: "Traverse City, Muskegon, Ludington" },
  { code: "234", country: "United States", state: "Ohio", area: "Akron, Canton, Youngstown" },
  { code: "240", country: "United States", state: "Maryland", area: "Frederick, Hagerstown, Cumberland" },
  { code: "242", country: "The Bahamas", state: "(All Locations)", area: "(All Locations)" },
  { code: "246", country: "Barbados", state: "(All Locations)", area: "(All Locations)" },
  { code: "248", country: "United States", state: "Michigan", area: "Troy" },
  { code: "250", country: "Canada", state: "British Columbia", area: "non-Vancouver area" },
  { code: "252", country: "United States", state: "North Carolina", area: "Greenville, Kitty Hawk" },
  { code: "253", country: "United States", state: "Washington", area: "Tacoma" },
  { code: "254", country: "United States", state: "Texas", area: "Waco, Killeen" },
  { code: "256", country: "United States", state: "Alabama", area: "Huntsville" },
  { code: "262", country: "United States", state: "Wisconsin", area: "Racine, West Bend" },
  { code: "264", country: "Anguilla", state: "(All Locations)", area: "(All Locations)" },
  { code: "267", country: "United States", state: "Pennsylvania", area: "Philadelphia" },
  { code: "268", country: "Antigua and Barbuda", state: "(All Locations)", area: "(All Locations)" },
  { code: "270", country: "United States", state: "Kentucky", area: "Paducah, Bowling Green, Owensboro" },
  { code: "281", country: "United States", state: "Texas", area: "Houston" },
  { code: "284", country: "British Virgin Islands", state: "(All Locations)", area: "(All Locations)" },
  { code: "301", country: "United States", state: "Maryland", area: "Frederick, Hagerstown, Cumberland" },
  { code: "302", country: "United States", state: "Delaware", area: "(All Locations)" },
  { code: "303", country: "United States", state: "Colorado", area: "Denver, Boulder" },
  { code: "304", country: "United States", state: "West Virginia", area: "(All Locations)" },
  { code: "305", country: "United States", state: "Florida", area: "Miami, Key West" },
  { code: "306", country: "Canada", state: "Saskatchewan", area: "(All Locations)" },
  { code: "307", country: "United States", state: "Wyoming", area: "(All Locations)" },
  { code: "308", country: "United States", state: "Nebraska", area: "Scottsbluff, North Platte" },
  { code: "309", country: "United States", state: "Illinois", area: "Moline, Peoria" },
  { code: "310", country: "United States", state: "California", area: "West Los Angeles, Torrance, Malibu" },
  { code: "312", country: "United States", state: "Illinois", area: "Chicago" },
  { code: "313", country: "United States", state: "Michigan", area: "Detroit" },
  { code: "314", country: "United States", state: "Missouri", area: "Saint Louis" },
  { code: "315", country: "United States", state: "New York", area: "Syracuse, Utica, Watertown" },
  { code: "316", country: "United States", state: "Kansas", area: "Wichita, Parsons, Great Bend" },
  { code: "317", country: "United States", state: "Indiana", area: "Indianapolis" },
  { code: "318", country: "United States", state: "Louisiana", area: "Shreveport, Monroe, Alexandria" },
  { code: "319", country: "United States", state: "Iowa", area: "Dubuque, Davenport, Iowa City, Burlington" },
  { code: "320", country: "United States", state: "Minnesota", area: "Saint Cloud, Morris, Hutchinson" },
  { code: "321", country: "United States", state: "Florida", area: "Orlando" },
  { code: "323", country: "United States", state: "California", area: "Los Angeles" },
  { code: "330", country: "United States", state: "Ohio", area: "Akron, Canton, Youngstown" },
  { code: "334", country: "United States", state: "Alabama", area: "Birmingham, Tuscaloosa" },
  { code: "336", country: "United States", state: "North Carolina", area: "Winston Salem" },
  { code: "337", country: "United States", state: "Louisiana", area: "Lafayette, Lake Charles" },
  { code: "340", country: "Virgin Islands", state: "(All Locations)", area: "(All Locations)" },
  { code: "345", country: "Cayman Islands", state: "(All Locations)", area: "(All Locations)" },
  { code: "347", country: "United States", state: "New York", area: "Bronx, Queens, Brooklyn, Staten Island" },
  { code: "352", country: "United States", state: "Florida", area: "Gainesville, Ocala" },
  { code: "360", country: "United States", state: "Washington", area: "Olympia, Bellingham, Aberdeen" },
  { code: "361", country: "United States", state: "Texas", area: "Corpus Christi, Victoria" },
  { code: "385", country: "United States", state: "Utah", area: "Provo, Ogden" },
  { code: "401", country: "United States", state: "Rhode Island", area: "(All Locations)" },
  { code: "402", country: "United States", state: "Nebraska", area: "Omaha, Lincoln" },
  { code: "403", country: "Canada", state: "Alberta", area: "Calgary, southern portion" },
  { code: "404", country: "United States", state: "Georgia", area: "Atlanta" },
  { code: "405", country: "United States", state: "Oklahoma", area: "Oklahoma City, Edmond" },
  { code: "406", country: "United States", state: "Montana", area: "(All Locations)" },
  { code: "407", country: "United States", state: "Florida", area: "Orlando" },
  { code: "408", country: "United States", state: "California", area: "San Jose, Sunnyvale, Los Gatos" },
  { code: "409", country: "United States", state: "Texas", area: "Beaumont, Galveston" },
  { code: "410", country: "United States", state: "Maryland", area: "Baltimore, Cambridge" },
  { code: "412", country: "United States", state: "Pennsylvania", area: "Pittsburgh" },
  { code: "413", country: "United States", state: "Massachusetts", area: "Springfield, Pittsfield" },
  { code: "414", country: "United States", state: "Wisconsin", area: "Milwaukee" },
  { code: "415", country: "United States", state: "California", area: "San Francisco, Novato, San Rafael" },
  { code: "416", country: "Canada", state: "Ontario", area: "Toronto" },
  { code: "417", country: "United States", state: "Missouri", area: "Springfield, Joplin" },
  { code: "418", country: "Canada", state: "Quebec", area: "Quebec" },
  { code: "419", country: "United States", state: "Ohio", area: "Toledo, Sandusky, Bowling Green" },
  { code: "423", country: "United States", state: "Tennessee", area: "Chattanooga, Sweetwater, Bristol" },
  { code: "425", country: "United States", state: "Washington", area: "Seattle area" },
  { code: "435", country: "United States", state: "Utah", area: "Logan, Blanding, Richfield" },
  { code: "440", country: "United States", state: "Ohio", area: "Ashtabula, Elyria" },
  { code: "441", country: "Bermuda", state: "(All Locations)", area: "(All Locations)" },
  { code: "443", country: "United States", state: "Maryland", area: "Baltimore, Cambridge" },
  { code: "450", country: "Canada", state: "Quebec", area: "Laval" },
  { code: "469", country: "United States", state: "Texas", area: "Dallas, Plano" },
  { code: "473", country: "Grenada", state: "(All Locations)", area: "(All Locations)" },
  { code: "478", country: "United States", state: "Georgia", area: "Macon, Warner Robins, Swainsboro" },
  { code: "480", country: "United States", state: "Arizona", area: "eastern Phoenix area, Chandler" },
  { code: "484", country: "United States", state: "Pennsylvania", area: "Allentown, Reading" },
  { code: "501", country: "United States", state: "Arkansas", area: "Little Rock, Fayetteville, Hot Springs" },
  { code: "502", country: "United States", state: "Kentucky", area: "Louisville, Frankfort" },
  { code: "503", country: "United States", state: "Oregon", area: "Portland, Salem, Tillamoon, Astoria" },
  { code: "504", country: "United States", state: "Louisiana", area: "New Orleans, Houma" },
  { code: "505", country: "United States", state: "New Mexico", area: "(All Locations)" },
  { code: "506", country: "Canada", state: "New Brunswick", area: "(All Locations)" },
  { code: "507", country: "United States", state: "Minnesota", area: "Rochester, Mankato, Marshall, Worthington" },
  { code: "508", country: "United States", state: "Massachusetts", area: "Worcester, Attleboro, New Bedford, Hyannis" },
  { code: "509", country: "United States", state: "Washington", area: "Spokane, Yakima, Walla Walla" },
  { code: "510", country: "United States", state: "California", area: "Oakland, Hayward" },
  { code: "512", country: "United States", state: "Texas", area: "Austin" },
  { code: "513", country: "United States", state: "Ohio", area: "Cincinnati, Middletown" },
  { code: "514", country: "Canada", state: "Quebec", area: "Montreal" },
  { code: "515", country: "United States", state: "Iowa", area: "Des Moines, Fort Dodge" },
  { code: "516", country: "United States", state: "New York", area: "Elmont" },
  { code: "517", country: "United States", state: "Michigan", area: "Lansing, Jackson, Alpena" },
  { code: "518", country: "United States", state: "New York", area: "Albany, Saranac Lake, Plattsburgh" },
  { code: "519", country: "Canada", state: "Ontario", area: "Windsor, London" },
  { code: "520", country: "United States", state: "Arizona", area: "non-Phoenix areas" },
  { code: "530", country: "United States", state: "California", area: "Redding, Chico, Alturas" },
  { code: "540", country: "United States", state: "Virginia", area: "Roanoke, Harrisonburg, Fredricksburg, Winchester" },
  { code: "541", country: "United States", state: "Oregon", area: "Eugene, Bend, Medford, Burns" },
  { code: "559", country: "United States", state: "California", area: "Fresno" },
  { code: "561", country: "United States", state: "Florida", area: "West Palm Beach, Boca Raton" },
  { code: "562", country: "United States", state: "California", area: "Long Beach" },
  { code: "570", country: "United States", state: "Pennsylvania", area: "Scranton, Williamsport" },
  { code: "571", country: "United States", state: "Virginia", area: "Alexandria" },
  { code: "573", country: "United States", state: "Missouri", area: "Jefferson City, Hannibal" },
  { code: "580", country: "United States", state: "Oklahoma", area: "Enid, Woodward, Lawton" },
  { code: "600", country: "Canada", state: "(All Locations)", area: "Canadian Services" },
  { code: "601", country: "United States", state: "Mississippi", area: "Jackson, Mc Comb" },
  { code: "602", country: "United States", state: "Arizona", area: "Phoenix" },
  { code: "603", country: "United States", state: "New Hampshire", area: "(All Locations)" },
  { code: "604", country: "Canada", state: "British Columbia", area: "Vancouver area" },
  { code: "605", country: "United States", state: "South Dakota", area: "(All Locations)" },
  { code: "606", country: "United States", state: "Kentucky", area: "London, Morehead, Pikeville" },
  { code: "607", country: "United States", state: "New York", area: "Elmira, Binghamton" },
  { code: "608", country: "United States", state: "Wisconsin", area: "Madison, La Crosse" },
  { code: "609", country: "United States", state: "New Jersey", area: "Trenton, Atlantic City, Brown Mills" },
  { code: "610", country: "United States", state: "Pennsylvania", area: "Allentown, Reading" },
  { code: "612", country: "United States", state: "Minnesota", area: "Minneapolis" },
  { code: "613", country: "Canada", state: "Ontario", area: "Ottawa" },
  { code: "614", country: "United States", state: "Ohio", area: "Columbus" },
  { code: "615", country: "United States", state: "Tennessee", area: "Nashville" },
  { code: "616", country: "United States", state: "Michigan", area: "Kalamazoo, Grand Rapids" },
  { code: "617", country: "United States", state: "Massachusetts", area: "Boston" },
  { code: "618", country: "United States", state: "Illinois", area: "Mount Vernon, Carbondale" },
  { code: "619", country: "United States", state: "California", area: "San Diego" },
  { code: "623", country: "United States", state: "Arizona", area: "western Phoenix area, Peoria, Buckeye" },
  { code: "626", country: "United States", state: "California", area: "Pasadena" },
  { code: "630", country: "United States", state: "Illinois", area: "Aurora" },
  { code: "631", country: "United States", state: "New York", area: "eastern Long Island" },
  { code: "636", country: "United States", state: "Missouri", area: "Union, Chesterfield" },
  { code: "641", country: "United States", state: "Iowa", area: "Mason City, Creston" },
  { code: "646", country: "United States", state: "New York", area: "New York" },
  { code: "647", country: "Canada", state: "Ontario", area: "Toronto" },
  { code: "649", country: "Turks and Caicos Islands", state: "(All Locations)", area: "(All Locations)" },
  { code: "650", country: "United States", state: "California", area: "Palo Alto, San Mateo" },
  { code: "651", country: "United States", state: "Minnesota", area: "Saint Paul, Lindstrom, Red Wing" },
  { code: "660", country: "United States", state: "Missouri", area: "Macon, Marshall, Sedalia" },
  { code: "661", country: "United States", state: "California", area: "Bakersfield" },
  { code: "662", country: "United States", state: "Mississippi", area: "Tupelo, Columbus, Greenville" },
  { code: "664", country: "Montserrat", state: "(All Locations)", area: "(All Locations)" },
  { code: "670", country: "Northern Mariana Islands", state: "(All Locations)", area: "(All Locations)" },
  { code: "671", country: "Guam", state: "(All Locations)", area: "(All Locations)" },
  { code: "678", country: "United States", state: "Georgia", area: "Atlanta" },
  { code: "682", country: "United States", state: "Texas", area: "Fort Worth" },
  { code: "701", country: "United States", state: "North Dakota", area: "(All Locations)" },
  { code: "702", country: "United States", state: "Nevada", area: "Las Vegas" },
  { code: "703", country: "United States", state: "Virginia", area: "Alexandria" },
  { code: "704", country: "United States", state: "North Carolina", area: "Charlotte, Kingstown" },
  { code: "705", country: "Canada", state: "Ontario", area: "Sudbury, Sault Ste Marie" },
  { code: "706", country: "United States", state: "Georgia", area: "Athens, Augusta, Toccoa, Dalton, Rome" },
  { code: "707", country: "United States", state: "California", area: "Santa Rosa, Ukiah, Eureka" },
  { code: "708", country: "United States", state: "Illinois", area: "Chicago Heights" },
  { code: "709", country: "Canada", state: "Newfoundland", area: "(All Locations)" },
  { code: "710", country: "United States", state: "(All Locations)", area: "US Government" },
  { code: "712", country: "United States", state: "Iowa", area: "Sioux City, Council Bluffs" },
  { code: "713", country: "United States", state: "Texas", area: "Houston" },
  { code: "714", country: "United States", state: "California", area: "Orange, Huntington Beach" },
  { code: "715", country: "United States", state: "Wisconsin", area: "Wausau, Eau Claire" },
  { code: "716", country: "United States", state: "New York", area: "Buffalo, Rochester, Jamestown" },
  { code: "717", country: "United States", state: "Pennsylvania", area: "Harrisburg, Gettysburg" },
  { code: "718", country: "United States", state: "New York", area: "Bronx, Queens, Brooklyn, Staten Island" },
  { code: "719", country: "United States", state: "Colorado", area: "Colorado Springs, Pueblo" },
  { code: "720", country: "United States", state: "Colorado", area: "Denver, Boulder" },
  { code: "724", country: "United States", state: "Pennsylvania", area: "New Castle, Uniontown" },
  { code: "727", country: "United States", state: "Florida", area: "Clearwater" },
  { code: "732", country: "United States", state: "New Jersey", area: "Lakewood, New Brunswick, Neptune" },
  { code: "734", country: "United States", state: "Michigan", area: "Ann Arbor" },
  { code: "740", country: "United States", state: "Ohio", area: "Cambridge, Jackson, Lancaster, Marietta" },
  { code: "757", country: "United States", state: "Virginia", area: "Norfolk" },
  { code: "758", country: "Saint Lucia", state: "(All Locations)", area: "(All Locations)" },
  { code: "760", country: "United States", state: "California", area: "Indio, Ridgecrest, Bishop, Blythe" },
  { code: "763", country: "United States", state: "Minnesota", area: "Maple Grove" },
  { code: "765", country: "United States", state: "Indiana", area: "Lafayette, Marion, Muncie, Richmond" },
  { code: "767", country: "Dominica", state: "(All Locations)", area: "(All Locations)" },
  { code: "770", country: "United States", state: "Georgia", area: "Roswell, Marietta, Cedartown, Griffin" },
  { code: "773", country: "United States", state: "Illinois", area: "Chicago" },
  { code: "775", country: "United States", state: "Nevada", area: "Reno, Carson City, Elko, Ely, Tonopah" },
  { code: "780", country: "Canada", state: "Alberta", area: "Edmonton, northern portion" },
  { code: "781", country: "United States", state: "Massachusetts", area: "Norwood, Weymouth, Saugus" },
  { code: "784", country: "Saint Vincent and the Grenadines", state: "(All Locations)", area: "(All Locations)" },
  { code: "785", country: "United States", state: "Kansas", area: "Topeka, Saline" },
  { code: "786", country: "United States", state: "Florida", area: "Miami" },
  { code: "787", country: "Puerto Rico", state: "(All Locations)", area: "(All Locations)" },
  { code: "801", country: "United States", state: "Utah", area: "Salt Lake City" },
  { code: "802", country: "United States", state: "Vermont", area: "(All Locations)" },
  { code: "803", country: "United States", state: "South Carolina", area: "Columbia, Sumter" },
  { code: "804", country: "United States", state: "Virginia", area: "Richmond, Lynchburg, Danville" },
  { code: "805", country: "United States", state: "California", area: "Thousand Oaks, San Luis Obispo, Lompoc" },
  { code: "806", country: "United States", state: "Texas", area: "Amarillo, Lubbock" },
  { code: "807", country: "Canada", state: "Ontario", area: "Thunder Bay" },
  { code: "808", country: "United States", state: "Hawaii", area: "(All Locations)" },
  { code: "809", country: "Dominican Republic", state: "(All Locations)", area: "(All Locations)" },
  { code: "810", country: "United States", state: "Michigan", area: "Flint, Port Huron" },
  { code: "812", country: "United States", state: "Indiana", area: "Terre Haute, Bloomington, New Albany, Evansville" },
  { code: "813", country: "United States", state: "Florida", area: "Tampa" },
  { code: "814", country: "United States", state: "Pennsylvania", area: "Erie, Warren, Altoona, Johnstown" },
  { code: "815", country: "United States", state: "Illinois", area: "Rickford, Freeport, De Kalb, La Salle" },
  { code: "816", country: "United States", state: "Missouri", area: "Kansas City, Saint Joseph" },
  { code: "817", country: "United States", state: "Texas", area: "Fort Worth" },
  { code: "818", country: "United States", state: "California", area: "Glendale, San Fernando" },
  { code: "819", country: "Canada", state: "Quebec", area: "Hull, Sherbrooke" },
  { code: "828", country: "United States", state: "North Carolina", area: "Asheville" },
  { code: "830", country: "United States", state: "Texas", area: "Uvalde" },
  { code: "831", country: "United States", state: "California", area: "Salinas, Santa Cruz" },
  { code: "832", country: "United States", state: "Texas", area: "Houston" },
  { code: "843", country: "United States", state: "South Carolina", area: "Charleston, Myrtle Beach, Florence" },
  { code: "845", country: "United States", state: "New York", area: "Poughkeepsie, Middletown" },
  { code: "847", country: "United States", state: "Illinois", area: "Waukegan, Des Plaines" },
  { code: "850", country: "United States", state: "Florida", area: "Tallahassee" },
  { code: "856", country: "United States", state: "New Jersey", area: "Cherry Hill, Vineland" },
  { code: "858", country: "United States", state: "California", area: "Solano Beach, northern San Diego area" },
  { code: "859", country: "United States", state: "Kentucky", area: "Lexington" },
  { code: "860", country: "United States", state: "Connecticut", area: "Hartford, Norwich" },
  { code: "863", country: "United States", state: "Florida", area: "Avon Park, Clewiston" },
  { code: "864", country: "United States", state: "South Carolina", area: "Greenville, Spartanburg, Anderson" },
  { code: "865", country: "United States", state: "Tennessee", area: "Knoxville" },
  { code: "867", country: "Canada", state: "Northwest Territories", area: "(All Locations)" },
  { code: "867", country: "Canada", state: "Nunavut", area: "(All Locations)" },
  { code: "867", country: "Canada", state: "Yukon Territory", area: "(All Locations)" },
  { code: "868", country: "Trinidad and Tobago", state: "(All Locations)", area: "(All Locations)" },
  { code: "869", country: "Saint Kitts and Nevis", state: "(All Locations)", area: "(All Locations)" },
  { code: "870", country: "United States", state: "Arkansas", area: "Jonesboro, Pine Bluff" },
  { code: "876", country: "Jamaica", state: "(All Locations)", area: "(All Locations)" },
  { code: "901", country: "United States", state: "Tennessee", area: "Memphis, Jackson, Union City" },
  { code: "902", country: "Canada", state: "Nova Scotia", area: "(All Locations)" },
  { code: "902", country: "Canada", state: "Prince Edward Island", area: "(All Locations)" },
  { code: "903", country: "United States", state: "Texas", area: "Tyler, Sherman" },
  { code: "904", country: "United States", state: "Florida", area: "Jacksonville" },
  { code: "905", country: "Canada", state: "Ontario", area: "Hamilton area" },
  { code: "906", country: "United States", state: "Michigan", area: "Sault Ste. Marie, Escanaba, Marquette" },
  { code: "907", country: "United States", state: "Alaska", area: "(All Locations)" },
  { code: "908", country: "United States", state: "New Jersey", area: "Washington" },
  { code: "909", country: "United States", state: "California", area: "Pomona, San Bernadino, Temecula" },
  { code: "910", country: "United States", state: "North Carolina", area: "Fayetteville, Wilmington, Jacksonville" },
  { code: "912", country: "United States", state: "Georgia", area: "Waycross, Brunswick, Savannah, Vidalia" },
  { code: "913", country: "United States", state: "Kansas", area: "Kansas City, Overland Park" },
  { code: "914", country: "United States", state: "New York", area: "White Plains" },
  { code: "915", country: "United States", state: "Texas", area: "El Paso, Alpine, Midland, Abilene" },
  { code: "916", country: "United States", state: "California", area: "Sacramento" },
  { code: "917", country: "United States", state: "New York", area: "New York, Bronx, Queens, Brooklyn, Staten Island" },
  { code: "918", country: "United States", state: "Oklahoma", area: "Tulsa, Mcalester, Bartlesville" },
  { code: "919", country: "United States", state: "North Carolina", area: "Raleigh, Durham" },
  { code: "920", country: "United States", state: "Wisconsin", area: "Green Bay, Oshkosh, Sheboygan" },
  { code: "925", country: "United States", state: "California", area: "Concord, Pleasanton" },
  { code: "931", country: "United States", state: "Tennessee", area: "Columbia, Manchester, Clarksville, Cookeville" },
  { code: "936", country: "United States", state: "Texas", area: "Huntsville, Lufkin" },
  { code: "937", country: "United States", state: "Ohio", area: "Dayton, Springfield, Hillsboro" },
  { code: "940", country: "United States", state: "Texas", area: "Vernon, Wichita Falls" },
  { code: "941", country: "United States", state: "Florida", area: "Naples, Fort Meyers" },
  { code: "949", country: "United States", state: "California", area: "Irvine, Laguna Niguel" },
  { code: "952", country: "United States", state: "Minnesota", area: "Bloomington" },
  { code: "954", country: "United States", state: "Florida", area: "Fort Lauderdale" },
  { code: "956", country: "United States", state: "Texas", area: "Mcallen, Brownsville" },
  { code: "970", country: "United States", state: "Colorado", area: "Grand Junction, Steamboat Springs, Fort Collins" },
  { code: "971", country: "United States", state: "Oregon", area: "Portland, Salem" },
  { code: "972", country: "United States", state: "Texas", area: "Dallas, Plano" },
  { code: "973", country: "United States", state: "New Jersey", area: "Paterson, Sussex" },
  { code: "978", country: "United States", state: "Massachusetts", area: "Peabody, Fitchburg" },
  { code: "979", country: "United States", state: "Texas", area: "Wharton" }
];
