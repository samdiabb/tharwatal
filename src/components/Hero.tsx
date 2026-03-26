import { TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
              <TrendingUp className="h-4 w-4" />
              <span>Strategic Real Estate Investment</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Building Wealth Through
              <span className="text-emerald-600"> Residential Real Estate</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Tharwat AL LLC specializes in acquiring, renovating, and managing high-quality residential properties to generate consistent long-term returns.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View Portfolio
              </a>
              <a href="#contact" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-emerald-600 transition-all">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern residential property"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-emerald-600">50+</div>
              <div className="text-gray-600 font-medium">Properties Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
