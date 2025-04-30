import { Clock, MapPin, Search, Star, Smartphone, } from "lucide-react"
import Footer from "./Footer"

const HeroSection = () => {
  return (
    <main className="flex-1">
    {/* Hero Section */}
    <section className="py-16 md:py-24 bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Delicious Food <br />
            <span className="text-orange-500">Delivered To Your Door</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            Order from your favorite restaurants and get food delivered in minutes. Enjoy the best dining experience at home.
          </p>

        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470"
            alt="Food delivery"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting your favorite food delivered is easier than ever with our simple 3-step process
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Search, title: "Choose Restaurant", desc: "Browse through hundreds of restaurants and cuisines near you" },
            { icon: MapPin, title: "Place Your Order", desc: "Select your favorite meals and add them to your cart" },
            { icon: Clock, title: "Fast Delivery", desc: "Your food will be delivered to your door in minutes" },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16 md:py-24 bg-gray-50">
      <div className = "container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best food/**
delivery experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Clock, title: "Fast Delivery", desc: "Our delivery partners ensure your food arrives hot and fresh in record time" },
            { icon: Star, title: "Quality Food", desc: "We partner with the best restaurants to ensure high-quality meals every time" },
            { icon: Search, title: "Wide Selection", desc: "Choose from thousands of restaurants and countless cuisines in your area" },
            { icon: MapPin, title: "Live Tracking", desc: "Track your order in real-time and know exactly when your food will arrive" },
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                <benefit.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it, see what our satisfied customers have to say
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Alex Johnson", review: "The food arrived hot and fresh. The delivery was super fast and the app is very easy to use. Definitely my go-to!" },
            { name: "Sarah Lee", review: "Amazing selection of restaurants and super quick delivery. The tracking feature is a game-changer!" },
            { name: "Mike Brown", review: "Love the app's interface and the exclusive deals. My meals always arrive on time and perfectly prepared." },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <img
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNjYzODM3NTk3&ixlib=rb-1.2.1&q=80&w=50`}
                    alt={`User ${index + 1}`}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mobile App */}
    <section className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 relative h-[400px] md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1556740738-6bf2838350d7"
              alt="Mobile App"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Download Our Mobile App</h2>
            <p className="text-gray-600 text-base">
              Get the full experience with our mobile app. Order food, track your delivery in real-time, and get exclusive app-only offers.
            </p>
            <div className="space-y-4">
              {[
                { icon: Smartphone, title: "Easy to Use Interface", desc: "Order food with just a few taps" },
                { icon: MapPin, title: "Real-time Tracking", desc: "Know exactly when your food will arrive" },
                { icon: Star, title: "Exclusive Offers", desc: "Get special discounts only available on the app" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center md:justify-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mr-4">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button className="px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Apple_Logo.svg"
                  alt="App Store"
                  width={20}
                  height={20}
                  className="mr-2 filter invert"
                />
                App Store
              </button>
              <button className="px-6 py-3 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors flex items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Google_Play_2022_logo.svg"
                  alt="Play Store"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to Order Delicious Food?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90 text-base">
          Join thousands of satisfied customers who enjoy their favorite meals delivered right to their doorstep.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 text-sm font-medium text-orange-600 bg-white rounded-full hover:bg-gray-100 transition-colors">
            Order Now
          </button>
          <button className="px-6 py-3 text-sm font-medium text-white border border-white rounded-full hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>

    <Footer/>
  </main>
  )
}

export default HeroSection