import { useOutletContext } from 'react-router-dom';
import { 
  Zap, Sun, Leaf, TrendingUp, Users, Shield, Globe, Lightbulb, 
  ChevronRight, ArrowRight, Target, HeartHandshake 
} from 'lucide-react';

export const AboutPage = () => {
  const { t } = useOutletContext<{ t: any }>();

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-green-600 via-emerald-600 to-teal-700 py-24 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-float">
            <Sun className="w-32 h-32 text-yellow-300" />
          </div>
          <div className="absolute bottom-32 right-20 animate-float-delayed">
            <Leaf className="w-40 h-40 text-green-300" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slideDown">
            {t.about.title}
          </h1>
          <p className="text-xl sm:text-2xl text-green-100 max-w-4xl mx-auto animate-slideUp delay-100">
            {t.about.subtitle}
          </p>
          <div className="mt-8 animate-slideUp delay-200">
            <span className="inline-block animate-bounce">
              <ChevronRight className="w-8 h-8 text-green-300 rotate-90" />
            </span>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-slideLeft">
            <div className="bg-linear-to-br from-green-50 to-emerald-50 p-10 rounded-3xl shadow-lg border border-green-100">
              <div className="bg-linear-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-9 h-9 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.mission}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{t.about.missionText}</p>
            </div>
          </div>

          <div className="animate-slideRight">
            <div className="bg-linear-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl shadow-lg border border-blue-100">
              <div className="bg-linear-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-9 h-9 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.vision}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{t.about.visionText}</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            {t.about.values}
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            {t.about.valuesIntro || "These principles guide every project, partnership, and decision we make."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Zap, 
              title: t.about.innovation, 
              desc: t.about.innovationText,
              color: "from-yellow-400 to-orange-500"
            },
            { 
              icon: Leaf, 
              title: t.about.sustainability, 
              desc: t.about.sustainabilityText,
              color: "from-green-400 to-emerald-600"
            },
            { 
              icon: HeartHandshake, 
              title: t.about.integrity || "Integrity", 
              desc: t.about.integrityText || "We believe in transparent partnerships, ethical practices, and long-term trust with communities and clients.",
              color: "from-blue-400 to-indigo-600"
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="group text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 animate-fadeIn border border-gray-100"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className={`bg-linear-to-br ${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Journey Timeline */}
      <div className="bg-linear-to-r from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t.about.journey?.title || "Our Journey So Far"}
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-green-400 to-emerald-600 hidden md:block rounded-full"></div>
            {[
              { 
                year: "2018", 
                title: t.about.journey?.founded || "Founded with Purpose", 
                desc: "Started with 3 rooftop solar projects in Southeast Asia",
                icon: Sun,
                side: "left"
              },
              { 
                year: "2020", 
                title: "50 MW Milestone", 
                desc: "Reached 50 MW of clean energy capacity across 3 countries",
                icon: TrendingUp,
                side: "right"
              },
              { 
                year: "2022", 
                title: "Battery Innovation", 
                desc: "Launched first AI-optimized energy storage systems",
                icon: Zap,
                side: "left"
              },
              { 
                year: "2024", 
                title: "Global Impact", 
                desc: "Operating in 8 countries with 300+ enterprise clients",
                icon: Globe,
                side: "right"
              },
            ].map((milestone, idx) => (
              <div
                key={idx}
                className={`flex items-center mb-16 animate-fadeIn ${
                  milestone.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className={`w-full md:w-1/2 ${
                  milestone.side === "left" ? "md:pr-16" : "md:pl-16"
                } text-center md:text-left`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-center md:justify-start">
                      <milestone.icon className="w-6 h-6 mr-2 text-emerald-600" />
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full  items-center justify-center text-white z-10 shadow-xl hidden md:flex">
                  <milestone.icon className="w-7 h-7" />
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team & Leadership */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.about.team?.title || "Meet Our Leadership"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.team?.subtitle || "Experts in renewable energy, engineering, and sustainability driving the green transition."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Dr. Sarah Chen",
              role: t.about.team?.ceo || "CEO & Founder",
              desc: "15+ years in renewable energy. PhD in Solar Engineering.",
              icon: Users
            },
            {
              name: "Michael Torres",
              role: t.about.team?.cto || "Chief Technology Officer",
              desc: "Pioneered AI-driven grid optimization systems.",
              icon: Lightbulb
            },
            {
              name: "Aisha Rahman",
              role: t.about.team?.cso || "Chief Sustainability Officer",
              desc: "Led 50+ ESG-compliant green projects globally.",
              icon: Shield
            },
          ].map((leader, idx) => (
            <div
              key={idx}
              className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all animate-fadeIn border border-gray-200"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="bg-linear-to-br from-emerald-400 to-teal-600 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                <leader.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
              <p className="text-emerald-600 font-medium mb-3">{leader.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{leader.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-br from-green-600 to-emerald-700 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            {t.about.cta?.title || "Ready to Power a Sustainable Future?"}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {t.about.cta?.subtitle || "Join us in building a cleaner, greener tomorrow — one project at a time."}
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl inline-flex items-center">
            {t.about.cta?.button || "Get Started"} 
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};