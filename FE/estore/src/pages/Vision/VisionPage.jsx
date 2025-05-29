import React from 'react';

const VisionPage = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Apple Vision Pro</h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8">Welcome to the era of spatial computing. Apple Vision Pro seamlessly blends digital content with your physical space.</p>
        <img src="https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/hero_endframe__dz973mndvu82_large.jpg" alt="Apple Vision Pro" className="rounded-xl shadow-lg w-full max-w-3xl mb-8" />
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Watch the film</button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">A new dimension of personal computing</h2>
          <p className="text-lg mb-6">Apple Vision Pro lets you interact with digital content in a way that feels like it's physically present in your space. Navigate simply by using your eyes, hands, and voice.</p>
        </div>
        <img src="https://www.apple.com/v/apple-vision-pro/a/images/overview/intro/intro_endframe__exvbv4dhv76q_large.jpg" alt="Spatial Computing" className="rounded-xl shadow-lg w-full" />
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 flex flex-col items-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">See Vision Pro in action</h2>
        <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/TX9qSaGXFyg"
            title="Apple Vision Pro Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-lg max-w-2xl">Experience apps, movies, and games like never before — all in your own space.</p>
      </section>

      {/* Immersive Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src="https://www.apple.com/v/apple-vision-pro/a/images/overview/immersive/immersive_endframe__gk6l4z6y3b6y_large.jpg" alt="Immersive Experience" className="rounded-xl shadow-lg w-full order-2 md:order-1" />
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-4">Immersive Environments</h2>
          <p className="text-lg mb-6">Transform any space into a personal theater with immersive environments that make you feel like you're somewhere else entirely.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-t from-black to-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for the future?</h2>
        <p className="text-lg max-w-xl mx-auto mb-8">Apple Vision Pro is coming soon. Stay tuned for more updates and be the first to experience the next generation of spatial computing.</p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Notify Me</button>
      </section>
    </div>
  );
};

export default VisionPage;
