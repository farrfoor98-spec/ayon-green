import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Sun, Wind, Battery, ChevronRight, Zap, TrendingUp, Users, Globe, 
  Leaf, Lightbulb, Shield, ArrowUp,  Globe as GlobeIcon, 
  LightbulbIcon,
  HeartIcon
} from 'lucide-react';

export const HomePage = () => {
  const { t } = useOutletContext<{ t: any }>();

  // Animated counter state
  const [counters, setCounters] = useState({
    co2: 0,
    trees: 0,
    homes: 0,
  });

  // Animate counters on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const target = { co2: 285000, trees: 1200000, homes: 85000 };
    let current = { co2: 0, trees: 0, homes: 0 };

    const timer = setInterval(() => {
      let finished = true;

      (['co2', 'trees', 'homes'] as const).forEach(key => {
        const targetVal = target[key];
        const increment = targetVal / steps;
        current[key] += increment;

        if (current[key] < targetVal) {
          finished = false;
        } else {
          current[key] = targetVal;
        }
      });

      setCounters({
        co2: Math.floor(current.co2),
        trees: Math.floor(current.trees),
        homes: Math.floor(current.homes),
      });

      if (finished) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-green-600 via-emerald-600 to-teal-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 animate-float">
            <Sun className="w-32 h-32 text-yellow-300" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float-delayed">
            <Wind className="w-40 h-40 text-blue-300" />
          </div>
          <div className="absolute top-40 right-32 animate-float-slow">
            <Battery className="w-24 h-24 text-green-300" />
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

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, value: '150+', label: t.home.stats.projects },
              { icon: TrendingUp, value: '500 MW', label: t.home.stats.capacity },
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

      {/* Features Section */}
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
                <div className={`bg-linear-to-br ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Green Energy? */}
      <div className="py-20 bg-linear-to-r from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t.home.whyGreenEnergy?.title || "Why Green Energy Matters"}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Leaf,
                title: t.home.whyGreenEnergy?.reduceCarbon || "Reduce Carbon Footprint",
                desc: "Renewable energy produces zero direct emissions. Every MWh of clean power avoids ~0.7 tons of CO₂."
              },
              {
                icon: LightbulbIcon,
                title: t.home.whyGreenEnergy?.energyIndependence || "Energy Independence",
                desc: "Solar and wind reduce reliance on imported fossil fuels, enhancing national energy security."
              },
              {
                icon: HeartIcon,
                title: t.home.whyGreenEnergy?.healthierPlanet || "Healthier Planet",
                desc: "Cleaner air means fewer respiratory diseases and a sustainable future for generations."
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center animate-fadeIn" style={{ animationDelay: `${idx * 200}ms` }}>
                <div className=" bg-opacity-20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-green-50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Impact Counter */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.home.impact?.title || "Our Global Impact So Far"}
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            {t.home.impact?.subtitle || "Through renewable energy projects, we're making a measurable difference for the planet."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: counters.co2, label: "Tons of CO₂ Avoided", icon: Shield, color: "text-green-600" },
              { value: counters.trees, label: "Trees Saved", icon: Leaf, color: "text-emerald-600" },
              { value: counters.homes, label: "Homes Powered Annually", icon: Zap, color: "text-yellow-600" },
            ].map((item, idx) => (
              <div key={idx} className="animate-fadeIn" style={{ animationDelay: `${idx * 300}ms` }}>
                <item.icon className={`w-16 h-16 mx-auto mb-4 ${item.color}`} />
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {formatNumber(item.value)}<span className="text-3xl">+</span>
                </div>
                <div className="text-lg text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Milestones */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t.home.milestones?.title || "Our Sustainability Journey"}
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>
            {[
              { year: "2018", title: "Founded", desc: "Started with 3 solar pilots in Southeast Asia", icon: ArrowUp },
              { year: "2020", title: "50 MW Milestone", desc: "Reached 50 MW of installed clean energy capacity", icon: TrendingUp },
              { year: "2022", title: "Battery Storage", desc: "Launched first grid-scale battery projects", icon: Battery },
              { year: "2024", title: "Global Expansion", desc: "Entered 8 countries with 300+ clients", icon: GlobeIcon },
            ].map((milestone, idx) => (
              <div
                key={idx}
                className={`flex items-center mb-12 animate-fadeIn ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} text-center md:text-left`}>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full  items-center justify-center text-white z-10 hidden md:flex">
                  <milestone.icon className="w-6 h-6" />
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Did You Know? Facts */}
      <div className="bg-linear-to-br from-teal-600 to-emerald-700 py-16 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Did You Know?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Solar power is now the cheapest source of electricity in history (IEA, 2024)",
              "One wind turbine can power 1,500 homes for a year",
              "Renewables grew 50% faster in 2024 than any other fuel source",
              "Battery costs have fallen 89% since 2010",
            ].map((fact, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex items-start space-x-4 animate-fadeIn"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <Lightbulb className="w-8 h-8 text-yellow-300 shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};