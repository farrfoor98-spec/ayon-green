import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Zap, Sun, Leaf, TrendingUp } from 'lucide-react';

export const AboutPage = () => {
  const { t } = useOutletContext<{ t: any }>();

  return (
    <div className=" animate-fadeIn">
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-slideDown">{t.about.title}</h1>
          <p className="text-xl text-green-100 animate-slideUp">{t.about.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-slideLeft">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl">
              <Zap className="w-12 h-12 text-green-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.mission}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{t.about.missionText}</p>
            </div>
          </div>

          <div className="animate-slideRight">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl">
              <Sun className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.vision}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{t.about.visionText}</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">{t.about.values}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: t.about.innovation, desc: t.about.innovationText },
            { icon: Leaf, title: t.about.sustainability, desc: t.about.sustainabilityText },
            { icon: TrendingUp, title: t.about.excellence, desc: t.about.excellenceText },
          ].map((value, idx) => (
            <div
              key={idx}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};