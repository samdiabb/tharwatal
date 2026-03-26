import { Target, Shield, TrendingUp, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Tharwat AL LLC</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trusted real estate investment firm focused on acquiring and managing quality residential properties for sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img
            src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Professional real estate office"
            className="rounded-2xl shadow-xl"
          />
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Investment Strategy</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tharwat AL LLC is a professional real estate investment company specializing in the acquisition and long-term management of residential properties. Our strategic approach focuses on identifying undervalued properties in growing markets, implementing value-add improvements, and maintaining high occupancy rates through professional property management.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a portfolio of carefully selected properties, we generate consistent cash flow while building substantial equity. Our properties are maintained to the highest standards, ensuring tenant satisfaction and property value appreciation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-emerald-50 rounded-xl">
            <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Strategic Acquisition</h4>
            <p className="text-gray-600">Data-driven property selection in high-growth markets</p>
          </div>

          <div className="text-center p-6 bg-emerald-50 rounded-xl">
            <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Risk Management</h4>
            <p className="text-gray-600">Comprehensive insurance and property protection</p>
          </div>

          <div className="text-center p-6 bg-emerald-50 rounded-xl">
            <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Value Enhancement</h4>
            <p className="text-gray-600">Strategic renovations to maximize property value</p>
          </div>

          <div className="text-center p-6 bg-emerald-50 rounded-xl">
            <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Tenant Relations</h4>
            <p className="text-gray-600">Professional management ensuring reliable occupancy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
