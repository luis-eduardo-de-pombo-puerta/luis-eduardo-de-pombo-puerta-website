import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chatbot',
      description: 'A conversational AI chatbot built with natural language processing and machine learning.',
      tags: ['AI', 'NLP', 'Python'],
      image: '/project-placeholder-1.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Image Classification System',
      description: 'Deep learning model for image classification using convolutional neural networks.',
      tags: ['Deep Learning', 'Computer Vision', 'TensorFlow'],
      image: '/project-placeholder-2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Sentiment Analysis Tool',
      description: 'Real-time sentiment analysis of social media data using machine learning algorithms.',
      tags: ['NLP', 'Machine Learning', 'Python'],
      image: '/project-placeholder-3.jpg',
      link: '#'
    },
    {
      id: 4,
      title: 'Recommendation Engine',
      description: 'Personalized content recommendation system using collaborative filtering.',
      tags: ['Machine Learning', 'Python', 'Data Science'],
      image: '/project-placeholder-4.jpg',
      link: '#'
    }
  ];

  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Projects</h1>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
