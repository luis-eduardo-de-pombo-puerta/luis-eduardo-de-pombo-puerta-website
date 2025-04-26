const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior AI Engineer',
      company: 'Tech Innovations Inc.',
      period: 'xxxx - xxxx',
      description: 'Leading the development of AI-powered solutions for enterprise clients. Specializing in natural language processing and machine learning applications.',
      skills: ['Machine Learning', 'NLP', 'Python', 'TensorFlow', 'AWS']
    },
    {
      id: 2,
      role: 'AI Research Engineer',
      company: 'AI Research Lab',
      period: 'xxxx - xxxx',
      description: 'Conducted research in deep learning and computer vision. Published papers in top AI conferences and developed novel algorithms for image recognition.',
      skills: ['Deep Learning', 'Computer Vision', 'PyTorch', 'Research', 'Publications']
    },
    {
      id: 3,
      role: 'Machine Learning Engineer',
      company: 'Data Science Solutions',
      period: 'xxxx - xxxx',
      description: 'Built and deployed machine learning models for various business applications. Worked on data preprocessing, model training, and production deployment.',
      skills: ['Machine Learning', 'Data Science', 'Python', 'Scikit-learn', 'Docker']
    },
    {
      id: 4,
      role: 'Software Engineer',
      company: 'Tech Startup',
      period: 'xxxx - xxxx',
      description: 'Developed full-stack applications with a focus on backend services and API development. Implemented various features and optimizations.',
      skills: ['Full Stack', 'Node.js', 'React', 'MongoDB', 'REST APIs']
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Experience</h1>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-4 top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {experience.role}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {experience.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
