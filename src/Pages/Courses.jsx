import CarCard from "../components/CarCard";
import CategoryCourse from "../components/CategoryCourse";
import FilterCourses from "../components/FilterCourses";
import { useQuery } from "@tanstack/react-query";
import axiosURL from "../axiosConfig";
import { useState } from "react";

const fetchJourneys = async () => {
  const { data } = await axiosURL.get(`/trips/all`);
  return data;
};

export default function Courses() {
  const { isFetching, isError, error, data, refetch } = useQuery({
    queryKey: ['journeys'],
    queryFn: fetchJourneys,
  });

  const [journeys, setJourneys] = useState([

  ])


  return (
    <div className="flex flex-col pt-20 px-6 max-w-7xl">
      <h2 className="text-2xl font-bold underline_custom relative">Courses</h2>

      <CategoryCourse />
      <FilterCourses />

      {/* Gestion de l'état de chargement, d'erreur et d'affichage des trajets */}
      {isFetching ? (
        <div className="journey_cards_cols">
          {[0, 1, 2, 3].map((_, key) => (
            <div key={key} className="car_card p-2 mb-10 h-fit m-auto z-10 block shadow-card dark:shadow-none rounded-2xl">
              {/* Skeleton loader pour simuler le chargement des trajets */}
              <div className="w-full rounded-md my-2 p-1 h-44 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
              <div className="w-2/3 rounded-md my-2 p-1 h-3 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
              <div className="w-full rounded-md my-2 p-1 h-3 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
              <div className="w-1/2 rounded-md my-2 p-1 h-10 bg-gray-300 dark:bg-dark-accent animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : isError ? (
        <div className="w-full h-full text-center">
          <p className="text-red-500 inline">An error occurred while loading the courses.</p>
          <button onClick={() => refetch()} className="text-blue-500 hover:text-blue-700 underline inline">
            Retry
          </button>
        </div>
      ) : journeys?.length ? (
        <div className="journey_cards_cols">
          {journeys?.map((journey, key) => (
            <CarCard journey={journey} key={key} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full text-center">
          <p className="inline">No courses available at the moment.</p>
          <button onClick={() => refetch()} className="text-blue-500 hover:text-blue-700 underline inline">
            Actualisé
          </button>
        </div>
      )}
    </div>
  );
}
