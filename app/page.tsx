'use client';
import React, { useState } from 'react';
import { 
  Cloud, 
  Shield, 
  Users, 
  Zap, 
  Upload, 
  FolderOpen, 
  Share2, 
  Check, 
  Star,
  ChevronDown,
  Menu,
  X,
  Github
} from 'lucide-react';

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Droply</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How it Works</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
              <button className="text-slate-300 hover:text-white transition-colors">Sign In</button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started Free
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700/50">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
                <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How it Works</a>
                <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
                <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
                <button className="text-slate-300 hover:text-white transition-colors text-left">Sign In</button>
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-lg w-fit">
                  Get Started Free
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Store. Share. Sync.
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Effortlessly with Droply.
                </span>
              </h1>
              <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                Secure cloud storage that grows with you. Collaborate seamlessly, 
                sync instantly, and access your files anywhere, anytime.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Get Started Free
                </button>
                <button className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-200">
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start text-slate-400">
                <Check className="h-5 w-5 text-green-400 mr-2" />
                <span>Free 15GB storage • No credit card required</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-700">
                <div className="bg-slate-700 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold">My Files</span>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 bg-slate-600 rounded-lg p-3">
                      <FolderOpen className="h-5 w-5 text-blue-400" />
                      <span className="text-slate-200">Documents</span>
                      <span className="ml-auto text-slate-400 text-sm">24 files</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-slate-600 rounded-lg p-3">
                      <FolderOpen className="h-5 w-5 text-purple-400" />
                      <span className="text-slate-200">Projects</span>
                      <span className="ml-auto text-slate-400 text-sm">12 files</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-slate-600 rounded-lg p-3">
                      <FolderOpen className="h-5 w-5 text-green-400" />
                      <span className="text-slate-200">Images</span>
                      <span className="ml-auto text-slate-400 text-sm">156 files</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 border border-blue-500/30">
                  <p className="text-blue-300 text-sm font-medium">✨ 12.4 GB of 15 GB used</p>
                  <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to store, organize, and collaborate on your files with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure File Sharing</h3>
              <p className="text-slate-300">End-to-end encryption ensures your files stay private and secure, with granular permission controls.</p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Syncing</h3>
              <p className="text-slate-300">Instant synchronization across all your devices. Changes appear everywhere in seconds, not minutes.</p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
              <p className="text-slate-300">Work together seamlessly with shared folders, comments, and real-time editing capabilities.</p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Upload className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Drag & Drop Upload</h3>
              <p className="text-slate-300">Upload files effortlessly with our intuitive drag-and-drop interface. Bulk uploads made simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How Droply Works
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get started in three simple steps and transform the way you handle files.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">1. Upload</h3>
                <p className="text-slate-300">
                  Simply drag and drop your files or folders into Droply. 
                  We'll handle the rest with lightning-fast uploads.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FolderOpen className="h-8 w-8 text-white" />
              </div>
              <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">2. Organize</h3>
                <p className="text-slate-300">
                  Create folders, add tags, and organize your files exactly 
                  how you want them. Smart search makes finding anything easy.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">3. Share</h3>
                <p className="text-slate-300">
                  Share files securely with team members or clients. 
                  Control who can view, edit, or download your content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-xl text-slate-300">
              Join thousands of companies already using Droply to streamline their workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "Droply has completely transformed how our team collaborates. The real-time sync is flawless, and the security features give us peace of mind."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">SM</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Sarah Mitchell</p>
                  <p className="text-slate-400">Design Lead, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "The drag-and-drop interface is incredibly intuitive. We moved our entire team from our old solution in just one day."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">MJ</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Michael Johnson</p>
                  <p className="text-slate-400">CTO, StartupXYZ</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-4">
                "Outstanding customer support and rock-solid reliability. Droply never lets us down when we need it most."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">EC</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Emily Chen</p>
                  <p className="text-slate-400">Project Manager, Creative Agency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Companies */}
          <div className="text-center">
            <p className="text-slate-400 mb-8">Trusted by companies like:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-slate-500 font-semibold text-xl">TechCorp</div>
              <div className="text-slate-500 font-semibold text-xl">StartupXYZ</div>
              <div className="text-slate-500 font-semibold text-xl">Creative Co.</div>
              <div className="text-slate-500 font-semibold text-xl">DataFlow</div>
              <div className="text-slate-500 font-semibold text-xl">CloudWorks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$0</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">15 GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Basic file sharing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Mobile app access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Email support</span>
                  </li>
                </ul>
                <button className="w-full border border-slate-600 text-slate-300 py-3 rounded-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all">
                  Get Started Free
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8 border-2 border-blue-500 relative hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$12</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">2 TB storage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Advanced sharing controls</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Version history</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Password protection</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
                  Start Pro Trial
                </button>
              </div>
            </div>

            {/* Team Plan */}
            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Team</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$24</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">5 TB storage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Team collaboration tools</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Advanced admin controls</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-slate-300">SSO integration</span>
                  </li>
                </ul>
                <button className="w-full border border-slate-600 text-slate-300 py-3 rounded-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Get answers to common questions about Droply.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How secure is my data with Droply?",
                answer: "Your data is protected with end-to-end encryption, both in transit and at rest. We use AES-256 encryption and follow industry best practices for security. We never have access to your unencrypted files."
              },
              {
                question: "Can I collaborate with people who don't have Droply accounts?",
                answer: "Yes! You can share files and folders with anyone using secure links. Recipients can view and download files without creating an account, though they'll need one to edit or upload."
              },
              {
                question: "What happens if I exceed my storage limit?",
                answer: "You'll receive notifications as you approach your limit. If you exceed it, you won't be able to upload new files until you upgrade your plan or free up space by deleting files."
              },
              {
                question: "Can I access my files offline?",
                answer: "Yes, with our desktop and mobile apps, you can mark files and folders for offline access. They'll sync automatically when you're back online."
              },
              {
                question: "How do I cancel my subscription?",
                answer: "You can cancel anytime from your account settings. Your account will remain active until the end of your current billing period, and you'll still have access to the free plan features."
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg border border-slate-700/50">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-800/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-white font-semibold">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Cloud className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">Droply</span>
              </div>
              <p className="text-slate-400 mb-4">
                Secure cloud storage that grows with you. Store, share, and sync effortlessly.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Droply. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for teams everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;