import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Luis De Pombo</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              AI Engineer & Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              I specialize in building intelligent applications and systems that leverage artificial intelligence
              to solve complex problems. With expertise in machine learning, natural language processing,
              and full-stack development, I create innovative solutions that push the boundaries of what's possible.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
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
