const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I am a passionate AI Engineer with a strong background in machine learning and software development.
              My journey in technology began with a fascination for artificial intelligence and its potential
              to transform industries and improve lives.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Education</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Master of Science in Civil Engineering</h3>
                <p className="text-gray-600 dark:text-gray-300">University of Illinois at Urbana-Champaign</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Specialized in construction management and technology.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Science in Civil Engineering</h3>
                <p className="text-gray-600 dark:text-gray-300">University of Illinois at Urbana-Champaign</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Focused on core engineering principles and sustainable design. Graduated with honors.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Machine Learning',
                'Deep Learning',
                'Natural Language Processing',
                'Python',
                'TensorFlow',
                'PyTorch',
                'React',
                'Node.js',
                'AWS',
                'Docker',
                'Git',
                'SQL'
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Interests</h2>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding or working on AI projects, I enjoy hiking, reading science fiction, and playing chess. I'm also an avid photographer and love to capture landscapes and urban scenes.
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Connect With Me</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Feel free to check out my projects on <a href="https://github.com/luis-eduardo-de-pombo-puerta" className="text-blue-600 hover:underline dark:text-blue-400">GitHub</a> or reach out via <a href="mailto:depombo2@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">email</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
