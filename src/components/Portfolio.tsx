import { MapPin, Home, DollarSign } from 'lucide-react';

const properties = [
  {
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Single Family",
    bedrooms: 3,
    bathrooms: 2,
    location: "Metro Area",
    status: "Occupied",
    value: "$285,000"
  },
  {
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Single Family",
    bedrooms: 4,
    bathrooms: 2.5,
    location: "Suburban District",
    status: "Occupied",
    value: "$325,000"
  },
  {
    image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Duplex",
    bedrooms: 3,
    bathrooms: 2,
    location: "Downtown",
    status: "Occupied",
    value: "$410,000"
  },
  {
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Single Family",
    bedrooms: 3,
    bathrooms: 2,
    location: "West Side",
    status: "Occupied",
    value: "$295,000"
  },
  {
    image: "https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 2.5,
    location: "East District",
    status: "Occupied",
    value: "$265,000"
  },
  {
    image: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800",
    type: "Single Family",
    bedrooms: 4,
    bathrooms: 3,
    location: "North End",
    status: "Occupied",
    value: "$385,000"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse collection of well-maintained residential properties generating consistent returns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={property.image}
                alt={property.type}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{property.type}</h3>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {property.status}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Home className="h-4 w-4 mr-2" />
                    <span className="text-sm">{property.bedrooms} bed · {property.bathrooms} bath</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="text-sm font-semibold">{property.value}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Portfolio Performance</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">$1.8M+</div>
              <div className="text-emerald-100">Total Asset Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-emerald-100">Occupancy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+ Years</div>
              <div className="text-emerald-100">Average Hold Period</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
