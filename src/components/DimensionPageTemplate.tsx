import React from 'react';
import { Gallery } from './gallery';
import RadialNavigationButton from './radialNavigationButton';

type DimensionPageProps = {
  title: string;
  description: string;
  contentTitle: string;
  contentBody: React.ReactNode;
  images: string[];
  accentColor: string;
};

const DimensionPageTemplate: React.FC<DimensionPageProps> = ({
  title,
  description,
  contentTitle,
  contentBody,
  images,
  accentColor = 'text-spotify-green'
}) => {
  // Navigation items for the radial button
  const navItems = [
    { label: 'Physical', path: '/physical-self' },
    { label: 'Material', path: '/material-self' },
    { label: 'Sexual', path: '/sexual-self' },
    { label: 'Political', path: '/political-self' },
    { label: 'Spiritual', path: '/spiritual-self' },
    { label: 'Digital', path: '/digital-self' },
  ];

  return (
    <div className="bg-spotify-black min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <div className="flex items-center mb-10">
          <a
            href="/"
            className="flex items-center text-spotify-text-gray hover:text-spotify-green transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Main page
          </a>
        </div>

        {/* header */}
        <div className="text-center mb-12">
          <h1 className={`text-5xl font-bold ${accentColor} mb-4`}>{title}</h1>
          <p className="text-xl text-spotify-text-gray max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* content */}
        <div className="bg-spotify-dark-gray rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-white mb-6">{contentTitle}</h2>
          <div className="prose prose-invert max-w-none text-spotify-text-gray">
            {contentBody}
          </div>
        </div>

        {/* gallery */}
        <Gallery title={`${title} Exploration`} images={images} />

        {/* Radial Navigation Button */}
        <div className="flex flex-col items-center justify-center mt-10 mb-8">
          <div className="mb-8">
            <p className="text-center text-spotify-light-green font-medium text-lg">
              Navigate to other dimensions
            </p>
          </div>
          <RadialNavigationButton items={navItems} radius={160} />
        </div>
      </div>
    </div>
  );
};

export default DimensionPageTemplate;