import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex-1 space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400 block sm:inline">Luis E. De Pombo P.</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              AI Engineer & Full Stack Developer
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              I specialize in building intelligent applications and systems that leverage artificial intelligence
              to solve complex problems. With expertise in machine learning, natural language processing,
              and full-stack development, I create innovative solutions that push the boundaries of what's possible.
            </p>
            <div className="flex flex-wrap gap-3 sm:space-x-4">
              <Link
                to="/projects"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-4 sm:px-6 py-2 sm:py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform rotate-6"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                <img
                  src="/assets/photo-of-Luis.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
