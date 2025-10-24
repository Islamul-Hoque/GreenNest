import React, { useEffect, useState } from 'react';

const ExpertCard = () => {
    const [experts, setExperts] = useState([])
    useEffect(()=>{
        fetch('/experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])

    return (
        <div className="pt-12 pb-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-10"> Meet Our Green Experts </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {   
                        experts.map(expert => (
                            <div key={expert.id} className="bg-green-50 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 hover:-translate-y-2">
                                <img src={expert.image} alt={expert.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-200" />
                                <h3 className="text-xl font-bold text-green-700">{expert.name}</h3>
                                <p className="text-gray-600 font-medium">{expert.specialty}</p>
                            </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default ExpertCard;