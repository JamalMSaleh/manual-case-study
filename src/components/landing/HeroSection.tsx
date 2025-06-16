export default function HeroSection({}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Landing Page</h1>
      <p className="text-lg mb-8">
        Experience the best features and services we offer.
      </p>
      <button className="px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </div>
  );
}
