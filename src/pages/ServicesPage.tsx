import { useOutletContext } from 'react-router-dom';
import { 
 Zap, TrendingUp, Battery,
  Lightbulb, Wrench, Shield, DollarSign,  CheckCircle,
  ArrowRight, Phone, Mail
} from 'lucide-react';

export const ServicesPage = () => {
  const { t } = useOutletContext<{ t: any }>();

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-green-600 via-emerald-600 to-teal-700 py-24 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-float">
            <Zap className="w-32 h-32 text-yellow-300" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float-delayed">
            <Battery className="w-36 h-36 text-green-300" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slideDown">
            {t.services.title}
          </h1>
          <p className="text-xl sm:text-2xl text-green-100 max-w-4xl mx-auto animate-slideUp delay-100">
            {t.services.subtitle}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {[
            { 
              icon: Lightbulb, 
              title: t.services.consulting, 
              desc: t.services.consultingDesc,
              gradient: 'from-purple-500 to-pink-500',
              features: ['Site assessment', 'ROI analysis', 'Custom roadmap']
            },
            { 
              icon: Wrench, 
              title: t.services.installation, 
              desc: t.services.installationDesc,
              gradient: 'from-blue-500 to-cyan-500',
              features: ['Certified engineers', 'Tier-1 equipment', 'Fast deployment']
            },
            { 
              icon: Shield, 
              title: t.services.maintenance, 
              desc: t.services.maintenanceDesc,
              gradient: 'from-green-500 to-emerald-500',
              features: ['24/7 monitoring', 'Predictive maintenance', 'Performance guarantee']
            },
            { 
              icon: DollarSign, 
              title: t.services.financing, 
              desc: t.services.financingDesc,
              gradient: 'from-orange-500 to-red-500',
              features: ['0% down options', 'Government incentives', 'Flexibleured returns']
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 animate-fadeIn border border-gray-100"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className={`bg-linear-to-br ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr <2" />
                    <span className="text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t.services.process?.title || "How It Works"}
          </h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { icon: Phone, label: t.services.process?.step1 || "Consultation", delay: 0 },
              { icon: Lightbulb, label: t.services.process?.step2 || "Design", delay: 100 },
              { icon: Wrench, label: t.services.process?.step3 || "Installation", delay: 200 },
              { icon: Zap, label: t.services.process?.step4 || "Activation", delay: 300 },
              { icon: TrendingUp, label: t.services.process?.step5 || "Support", delay: 400 },
            ].map((step, idx) => (
              <div
                key={idx}
                className="animate-fadeIn"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className="bg-linear-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-gray-800">{step.label}</p>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-linear-to-r from-emerald-500 to-teal-600 -z-10" style={{ width: 'calc(100% - 4rem)', left: '4rem' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '98%', label: t.services.stats?.uptime || "System Uptime" },
              { value: '2-5', label: t.services.stats?.payback || "Year Payback" },
              { value: '25+', label: t.services.stats?.warranty || "Year Warranty" },
              { value: '500+', label: t.services.stats?.installs || "Installations" },
            ].map((stat, idx) => (
              <div key={idx} className="animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">{t.services.contact}</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {t.services.contactDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl inline-flex items-center">
              {t.services.contact} <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="tel:+992987654321" className="flex items-center gap-2 text-green-100 hover:text-white transition">
                <Phone className="w-5 h-5" /> +992 987 654 321
              </a>
              <a href="mailto:info@ayongreen.tj" className="flex items-center gap-2 text-green-100 hover:text-white transition">
                <Mail className="w-5 h-5" /> info@ayongreen.tj
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">{t.services.trust?.title || "Trusted by Industry Leaders"}</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['IRENA', 'UNDP', 'EBRD', 'GIZ', 'Tajik Government'].map((partner, idx) => (
              <div key={idx} className="text-xl font-semibold text-gray-700">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};