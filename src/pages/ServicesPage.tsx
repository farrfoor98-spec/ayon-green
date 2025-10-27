import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Users, Zap, TrendingUp, Battery, ChevronRight } from 'lucide-react';

export const ServicesPage = () => {
  const { t } = useOutletContext<{ t: any }>();

  return (
    <div className=" animate-fadeIn">
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-slideDown">{t.services.title}</h1>
          <p className="text-xl text-green-100 animate-slideUp">{t.services.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Users, title: t.services.consulting, desc: t.services.consultingDesc, gradient: 'from-purple-500 to-pink-500' },
            { icon: Zap, title: t.services.installation, desc: t.services.installationDesc, gradient: 'from-blue-500 to-cyan-500' },
            { icon: TrendingUp, title: t.services.maintenance, desc: t.services.maintenanceDesc, gradient: 'from-green-500 to-emerald-500' },
            { icon: Battery, title: t.services.financing, desc: t.services.financingDesc, gradient: 'from-orange-500 to-red-500' },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-center text-white animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4">{t.services.contact}</h2>
          <p className="text-xl text-green-100 mb-8">{t.services.contactDesc}</p>
          <button className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl">
            {t.services.contact} <ChevronRight className="inline w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};