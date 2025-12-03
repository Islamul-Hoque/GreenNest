import React from 'react';
import { FaDollarSign, FaStar, FaInfoCircle, FaSeedling } from 'react-icons/fa';
import usePlants from '../Hooks/usePlants';
import { useParams } from 'react-router';
import Loading from './Loading';

const PlantsDetailsCard = () => {
  const { plants, loading } = usePlants();
  const { id } = useParams();

  if (loading) return <Loading />;

  const singlePlant = plants.find((plant) => plant.plantId === Number(id));
  if (!singlePlant) return <p className="text-center py-10 text-xl font-semibold text-red-600">Plant not found</p>;

  const { plantName, scientificName, family, category, plantType, origin, plantingSeason, description, careLevel, lightRequirement, waterFrequency, humidityPreference, soilType, fertilizer, repottingFrequency, pruningTips, temperatureRange, size, growthRate, height,  spread, price, discount, availableStock, providerName, deliveryOptions, dateAdded, sku, rating, image, tags } = singlePlant;

  const hasDiscount = discount && discount > 0;
  const finalPrice = hasDiscount ? (price - (price * discount) / 100).toFixed(2) : price.toFixed(2);
  const isLowStock = availableStock <= 5;

  return (
    <main className="">
      <section className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10 items-stretch ">
          <div className="flex h-[29rem] ">  <img src={image} alt={plantName} className="w-full h-full object-cover rounded-xl border border-gray-200" /> </div>

          <div className="flex flex-col justify-between space-y-4 h-[29rem] ">
            <div className=''>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{plantName}</h1>
              <p className="text-base text-gray-600 mt-2 italic"> {scientificName} <span className="text-sm text-gray-500">({family})</span> </p>

              <div className="grid gap-3 text-sm mt-2">
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Type:</strong> {plantType}</p>
                <p><strong>Origin:</strong> {origin}</p>
                <p><strong>Season:</strong> {plantingSeason}</p>
                <p><strong>Soil:</strong> {soilType}</p>
                <p><strong>Fertilizer:</strong> {fertilizer}</p>
                <p><strong>Repotting:</strong> {repottingFrequency}</p>
                <p><strong>Pruning:</strong> {pruningTips}</p>
              </div>

              <div className=" flex items-center flex-wrap gap-2 mt-4">
                <strong className="shrink-0 ">Tags:</strong>
                <div className="flex flex-wrap gap-2">
                  {tags?.map((t, i) => (
                    <span key={i} className="px-3 py-0.5 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-green-700 flex items-center"><FaDollarSign className="text-lg mr-0.5" />{finalPrice}   </span>
                  {hasDiscount && (
                    <>
                      <span className="text-sm text-gray-400 line-through flex items-center"> <FaDollarSign className="text-xs mr-0.5" />{price.toFixed(2)} </span>
                      <span className="text-xs font-semibold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">-{discount}%</span>
                    </>
                  )}
                </div>
                <div className="flex items-center text-amber-500">
                  <FaStar /> <span className="ml-1 text-sm font-semibold text-gray-800">{rating}</span>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  careLevel?.toLowerCase() === 'easy' || careLevel?.toLowerCase() === 'low'
                    ? 'bg-green-100 text-green-800'
                    : careLevel?.toLowerCase() === 'moderate' || careLevel?.toLowerCase() === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : careLevel?.toLowerCase() === 'hard' || careLevel?.toLowerCase() === 'high'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>Care: {careLevel}</span>

                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isLowStock ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {isLowStock ? 'Low stock' : 'In stock'} • {availableStock} units
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">SKU: {sku}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2"> <FaInfoCircle /> Description </h2>
          <p className="text-gray-700 leading-relaxed text-base italic">{description}</p>
        </div>

        {/* Plant specifications */}
        <div className="p-6 md:p-10 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Plant specifications</h3>
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <tbody className="divide-y divide-gray-100">
              <tr><td className="p-2 font-medium text-gray-700">Growth rate</td><td className="p-2 text-gray-600">{growthRate}</td></tr>
              <tr><td className="p-2 font-medium text-gray-700">Size</td><td className="p-2 text-gray-600">{size}</td></tr>
              <tr><td className="p-2 font-medium text-gray-700">Height</td><td className="p-2 text-gray-600">{height}</td></tr>
              <tr><td className="p-2 font-medium text-gray-700">Spread</td><td className="p-2 text-gray-600">{spread}</td></tr>
              <tr><td className="p-2 font-medium text-gray-700">Category</td><td className="p-2 text-gray-600">{category}</td></tr>
              <tr><td className="p-2 font-medium text-gray-700">Type</td><td className="p-2 text-gray-600">{plantType}</td></tr>
              <tr><td className="p-2 font-medium text-gray-700">Origin</td><td className="p-2 text-gray-600">{origin}</td></tr>
              <tr><td className="p-2 font-medium text-gray-700">Planting Season</td><td className="p-2 text-gray-600">{plantingSeason}</td></tr>
            </tbody>
          </table>
        </div>

        {/* Quick care  */}
        <div className="p-6 md:p-10 border-t border-gray-100 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick care</h3>
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <tbody className="divide-y divide-gray-100">
              <tr> <td className="p-2 font-medium text-gray-700">Light</td> <td className="p-2 text-gray-600">{lightRequirement}</td> </tr>
              <tr> <td className="p-2 font-medium text-gray-700">Water</td>  <td className="p-2 text-gray-600">{waterFrequency}</td>   </tr>
              <tr> <td className="p-2 font-medium text-gray-700">Humidity</td>   <td className="p-2 text-gray-600">{humidityPreference}</td> </tr>
              <tr> <td className="p-2 font-medium text-gray-700">Temperature</td><td className="p-2 text-gray-600">{temperatureRange}</td> </tr>
              <tr> <td className="p-2 font-medium text-gray-700">Soil</td> <td className="p-2 text-gray-600">{soilType}</td> </tr>
              <tr> <td className="p-2 font-medium text-gray-700">Repotting</td> <td className="p-2 text-gray-600">{repottingFrequency}</td> </tr>
              <tr> <td className="p-2 font-medium text-gray-700">Pruning</td>  <td className="p-2 text-gray-600">{pruningTips}</td> </tr>
              <tr> <td className="p-2 font-medium text-gray-700">Care Level</td>  <td className="p-2 text-gray-600">{careLevel}</td></tr>
            </tbody>
          </table>
        </div>

        {/* Provider & delivery */}
        <div className="p-6 md:p-10 border-t border-gray-100 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Provider & Delivery</h3>
          <div className="flex justify-between gap-4 text-sm">
            <p><strong>Provider:</strong> <span className="text-blue-700 font-medium">{providerName}</span></p>
            <p className="md:col-span-2"><strong>Delivery:</strong> <span className="text-gray-700">{deliveryOptions?.join(', ')}</span></p>
            <p><strong>Added:</strong> <span className="text-gray-700">{dateAdded}</span></p>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PlantsDetailsCard;