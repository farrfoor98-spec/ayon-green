import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Sun, Wind, Battery, ChevronRight, Zap, TrendingUp, Users, Globe } from 'lucide-react';

export const HomePage = () => {
  const { t } = useOutletContext<{ t: any }>();

  return (
    <div className="animate-fadeIn">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 animate-float">
            <Sun className="w-32 h-32 text-yellow-300" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float-delayed">
            <Wind className="w-40 h-40 text-blue-300" />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slideDown">
            {t.home.title}
          </h1>
          <p className="text-2xl sm:text-3xl text-green-100 mb-4 animate-slideUp">
            {t.home.subtitle}
          </p>
          <p className="text-lg sm:text-xl text-green-50 mb-8 animate-slideUp delay-100">
            {t.home.description}
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl animate-slideUp delay-200">
            {t.home.cta} <ChevronRight className="inline w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, value: '150+', label: t.home.stats.projects },
              { icon: TrendingUp, value: '500', label: t.home.stats.capacity },
              { icon: Users, value: '300+', label: t.home.stats.clients },
              { icon: Globe, value: '8', label: t.home.stats.countries },
            ].map((stat, idx) => (
              <div key={idx} className="text-center animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
                <stat.icon className="w-12 h-12 mx-auto text-green-600 mb-3" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.home.features.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sun, title: t.home.features.solar, desc: t.home.features.solarDesc, color: 'from-yellow-400 to-orange-500' },
              { icon: Wind, title: t.home.features.wind, desc: t.home.features.windDesc, color: 'from-blue-400 to-cyan-500' },
              { icon: Battery, title: t.home.features.storage, desc: t.home.features.storageDesc, color: 'from-green-400 to-emerald-500' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};