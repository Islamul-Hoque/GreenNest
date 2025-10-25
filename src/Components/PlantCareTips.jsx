import React, { useEffect, useState } from 'react';

const PlantCareTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('/careTips.json')
      .then(res => res.json())
      .then(data => setTips(data));
  }, []);

  return (
    <div className="py-4 bg-gray-100 ">
      <div className="container mx-auto px-4">
        <h2 className="text-[1.85rem] md:text-[2.3rem] font-extrabold text-center text-green-800 mb-10">Plant Care Tips</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {  
            tips.map(tip => (
              <div key={tip.id} className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100 transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="mb-4"> <img src={tip.image} alt={tip.title} className="w-20 h-20 mx-auto"/> </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>))
          }
        </div>
      </div>
    </div>
  );
};

export default PlantCareTips;



