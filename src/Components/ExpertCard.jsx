import React from 'react';

const experts = [
  {
    id: 1,
    name: "Emma Bloom",
    specialty: "Indoor Plant Consultant",
    image: "https://i.ibb.co.com/0yFv71Xh/puzzled-displeased-man-with-stubble-grows-house-plants-needs-wipe-dust-sansevieria-273609-27490.jpg"
},
{
    id: 2,
    name: "Liam Green",
    specialty: "Botanical Designer",
    image: "https://i.ibb.co.com/s9N0JRx9/img231.jpg"
},
{
    id: 3,
    name: "Sophia Leaf",
    specialty: "Soil & Watering Specialist",
    image: "https://i.ibb.co.com/TxCvqWFv/young-beautiful-woman-gardener-apron-hat-holding-potted-plants-looking-it-smiling-with-happy-face-st.jpg"
},
{
    id: 4,
    name: "Noah Fern",
    specialty: "Tropical Plants Expert",
    image: "https://i.ibb.co.com/s9zCX4bF/confident-young-male-gardener-wearing-gardening-hat-gloves-holds-clippers-looks-plant-141793-70562.jpg"
  }
];

const ExpertCard = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-10"> Meet Our Green Experts </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {experts.map(expert => (
            <div key={expert.id} className="bg-green-50 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 hover:-translate-y-2">
                <img src={expert.image} alt={expert.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-200" />
              <h3 className="text-xl font-bold text-green-700">{expert.name}</h3>
              <p className="text-gray-600 font-medium">{expert.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertCard;




