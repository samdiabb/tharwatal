import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-emerald-500" />
            <div>
              <h3 className="text-xl font-bold">Tharwat AL LLC</h3>
              <p className="text-sm text-gray-400">Real Estate Investments</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Tharwat AL LLC. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Professional Real Estate Investment & Property Management
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
