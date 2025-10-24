import { useEffect, useState } from "react";
import axios from "axios";

const usePlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios("/plants.json")
            .then(res => {
                setPlants(res.data)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            });
    }, []);

    return { plants, loading };
};

export default usePlants;

