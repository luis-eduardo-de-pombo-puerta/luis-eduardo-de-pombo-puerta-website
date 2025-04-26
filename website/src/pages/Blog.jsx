import { useState } from 'react';

const Blog = () => {
  const [filter, setFilter] = useState('all');
  
  const posts = [
    {
      id: 1,
      title: 'Understanding Transformer Models',
      excerpt: 'A deep dive into the architecture and applications of transformer models in NLP.',
      date: 'March 15, 2024',
      readTime: '10 min read',
      tags: ['AI', 'NLP', 'Deep Learning'],
      image: '/blog-placeholder-1.jpg'
    },
    {
      id: 2,
      title: 'Building AI Applications with Python',
      excerpt: 'Practical guide to developing AI applications using Python and popular ML libraries.',
      date: 'February 28, 2024',
      readTime: '8 min read',
      tags: ['Python', 'Machine Learning', 'Tutorial'],
      image: '/blog-placeholder-2.jpg'
    },
    {
      id: 3,
      title: 'The Future of AI in Healthcare',
      excerpt: 'Exploring the potential impact of AI technologies in the healthcare industry.',
      date: 'February 10, 2024',
      readTime: '12 min read',
      tags: ['AI', 'Healthcare', 'Future Tech'],
      image: '/blog-placeholder-3.jpg'
    },
    {
      id: 4,
      title: 'Getting Started with TensorFlow',
      excerpt: 'A beginner-friendly introduction to TensorFlow and deep learning concepts.',
      date: 'January 25, 2024',
      readTime: '15 min read',
      tags: ['Deep Learning', 'TensorFlow', 'Tutorial'],
      image: '/blog-placeholder-4.jpg'
    }
  ];

  const allTags = ['all', ...new Set(posts.flatMap(post => post.tags))];

  const filteredPosts = filter === 'all'
    ? posts
    : posts.filter(post => post.tags.includes(filter));

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Blog</h1>
        
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
