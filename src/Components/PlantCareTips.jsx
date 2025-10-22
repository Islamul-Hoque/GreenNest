import React, { useEffect, useState } from 'react';

const PlantCareTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('/careTips.json')
      .then(res => res.json())
      .then(data => setTips(data));
  }, []);

  return (
    <div className="py-16 bg-green-50 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-10">  Plant Care Tips </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {tips.map(tip => (
            <div key={tip.id} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantCareTips;



