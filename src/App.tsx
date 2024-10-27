import React from 'react';
import { FileCheck2, FolderSearch, Users, Zap, MessageSquare, ArrowRight, Folders, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Folders className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">Organictech</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-emerald-600">Services</a>
              <a href="#features" className="text-gray-600 hover:text-emerald-600">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-emerald-600">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-emerald-600">Contact</a>
            </div>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Organize Your Digital World, Naturally
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform chaos into clarity with our intelligent file organization system.
              Experience the perfect blend of automation and intuitive design.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition flex items-center">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileCheck2 className="h-8 w-8 text-emerald-600" />,
                title: "Smart Organization",
                description: "AI-powered file categorization that learns from your habits"
              },
              {
                icon: <FolderSearch className="h-8 w-8 text-emerald-600" />,
                title: "Intelligent Search",
                description: "Find any file instantly with our advanced search capabilities"
              },
              {
                icon: <Shield className="h-8 w-8 text-emerald-600" />,
                title: "Secure Storage",
                description: "Enterprise-grade security for your sensitive documents"
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Organictech</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  icon: <Zap className="h-6 w-6 text-emerald-600" />,
                  title: "Lightning Fast",
                  description: "Process thousands of files in seconds"
                },
                {
                  icon: <Users className="h-6 w-6 text-emerald-600" />,
                  title: "Team Collaboration",
                  description: "Seamless sharing and access control"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 bg-emerald-100 rounded-lg mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Organization Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Operations Director",
                company: "TechCorp",
                content: "Organictech transformed how we handle our documents. The AI-powered organization is a game-changer."
              },
              {
                name: "Michael Chen",
                role: "IT Manager",
                company: "GlobalSys",
                content: "The implementation was smooth, and the results were immediate. Our team's productivity has increased significantly."
              },
              {
                name: "Emma Davis",
                role: "Project Lead",
                company: "InnovateCo",
                content: "The search functionality alone has saved us countless hours. Best investment we've made this year."
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                <MessageSquare className="h-8 w-8 text-emerald-600 mb-4" />
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Transform your file organization today. Our team is ready to help you get started.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Folders className="h-6 w-6 text-emerald-500" />
                <span className="text-xl font-bold text-white">Organictech</span>
              </div>
              <p className="text-sm">Making file organization natural and effortless.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-500">Features</a></li>
                <li><a href="#" className="hover:text-emerald-500">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-500">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-500">About</a></li>
                <li><a href="#" className="hover:text-emerald-500">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-500">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-500">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-500">Terms</a></li>
                <li><a href="#" className="hover:text-emerald-500">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Organictech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;