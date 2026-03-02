import { Home, Wrench, FileText, Key } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate investment and property management solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Acquisition</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Strategic identification and purchase of residential properties with strong appreciation potential. Our data-driven approach ensures optimal investment decisions in growing markets.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Market analysis and property evaluation
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Due diligence and inspection coordination
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Competitive pricing and negotiation
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Renovation</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Value-add improvements to maximize property appeal and rental income. Professional contractors ensure high-quality work that enhances both aesthetics and functionality.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Kitchen and bathroom upgrades
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Flooring, painting, and modernization
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Energy-efficient improvements
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Key className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Management</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Full-service management ensuring consistent occupancy and rental income. Professional tenant screening and relationship management maintains property value and reduces vacancy.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Tenant screening and placement
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Rent collection and accounting
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Maintenance coordination and inspections
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Management</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Comprehensive financial oversight and reporting for all properties. Detailed tracking of income, expenses, and property performance ensures transparency and accountability.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Monthly financial reporting
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Tax documentation and support
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                Budget planning and expense management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
