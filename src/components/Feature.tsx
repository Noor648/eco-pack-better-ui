import React from 'react';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Features = ({ features }: { features: Feature[] }) => {
  return (
    <div className="border-t border-gray-300items-center">
      <div className=" max-w-[1440px]  mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 px-4 py-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="text-green-500 text-4xl">{feature.icon}</div>
            <h3 className="text-3xl font-normal text-gray-700">{feature.title}</h3>
            <p className="text-sm text-tertiary">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
