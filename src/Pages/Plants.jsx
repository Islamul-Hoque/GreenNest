import React, { useState } from 'react';
import PlantsCard from '../Components/PlantsCard';
import usePlants from '../Hooks/usePlants';
import Loading from '../Components/Loading';
import { motion } from "framer-motion";

const Plants = () => {
  const { plants, loading } = usePlants();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default"); 
  const [filterCategories, setFilterCategories] = useState([]);

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };


  const handleCategoryChange = (category) => {
    if (category === "All") {
      setFilterCategories([]); 
    } else {
      setFilterCategories((prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
      );
    }
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const filteredPlants = plants
    .filter((plant) => plant.plantName.toLowerCase().includes(search.toLowerCase()) || plant.category?.toLowerCase().includes(search.toLowerCase()))
    .filter((plant) => (filterCategories.length > 0 ? filterCategories.includes(plant.category) : true))
    .sort((a, b) => {
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "ratingLow") return a.rating - b.rating;
      if (sortBy === "ratingHigh") return b.rating - a.rating;
      return 0; 
    });

  if (loading) return <Loading />;

  return (
    <main className="bg-green-50 py-16 ">
      <motion.div className="md:px-14 px-4">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-green-800">Our Plant Collection </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-center text-gray-600 mb-10">Search and discover your favorite plants — filter by category, sort by price or rating.</motion.p>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6 flex items-center justify-center">
          <label className="input w-full sm:w-[20rem] md:w-[25rem] gap-2 border rounded-md px-3 py-2 bg-white flex items-center">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"> <circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" /> </g> </svg>
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search plant" className="outline-none bg-transparent w-full" />
          </label>
        </motion.div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 ">
          <motion.aside variants={fadeLeft} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={{ once: true }} className="sm:col-span-1 md:col-span-4 lg:col-span-3 rounded-md space-y-6 sm:sticky sm:top-20 h-fit bg-green-50">
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-md shadow-sm">
              <input type="checkbox" defaultChecked/>
              <div className="collapse-title font-semibold text-gray-700">Filter by Category</div>
              <div className="collapse-content space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={filterCategories.length === 0} onChange={() => handleCategoryChange("All")} />
                  <span>All Categories</span>
                </label>
                {["Tropical", "Flowering Plant", "Vining Plant", "Succulent", "Medicinal Plant", "Humidity Lover"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input type="checkbox" checked={filterCategories.includes(cat)} onChange={() => handleCategoryChange(cat)} />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-md shadow-sm">
              <input type="checkbox" defaultChecked/>
              <div className="collapse-title font-semibold text-gray-700">Sort by Price</div>
              <div className="collapse-content space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={sortBy === "default"} onChange={() => handleSortChange("default")} /><span>Default (Original Order)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={sortBy === "priceLow"} onChange={() => handleSortChange("priceLow")} /> <span>Low to High</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={sortBy === "priceHigh"} onChange={() => handleSortChange("priceHigh")} /> <span>High to Low</span>
                </label>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-md shadow-sm">
              <input type="checkbox" defaultChecked/>
              <div className="collapse-title font-semibold text-gray-700">Sort by Rating</div>
              <div className="collapse-content space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={sortBy === "ratingLow"} onChange={() => handleSortChange("ratingLow")} /> <span>Low to High</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={sortBy === "ratingHigh"} onChange={() => handleSortChange("ratingHigh")} />  <span>High to Low</span>
                </label>
              </div>
            </div>
          </motion.aside>

          <div className="sm:col-span-1 md:col-span-8 lg:col-span-9">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, staggerChildren: 0.2 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlants.map((plant) => <PlantsCard key={plant.plantId} plant={plant} />)}
          </motion.div>
            </div>
        </section>
      </motion.div>
    </main>
  );
};

export default Plants;