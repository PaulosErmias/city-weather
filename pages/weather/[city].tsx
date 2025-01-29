import { ErrorComponent } from "@/components/ErrorComponent";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchWeather } from "../../store/weatherSlice";

export default function CityWeather() {
  const router = useRouter();
  const { city } = router.query;
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.weather);

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city as string));
    }
  }, [city, dispatch]);

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-24 w-24 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl w-full max-w-2xl p-8 transform transition-all hover:shadow-2xl">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {data?.name}
            </h1>
            <p className="text-xl text-gray-600">
              {data?.weather[0]?.description}
            </p>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`}
            alt="Weather icon"
            className="w-32 h-32 animate-pulse-slow"
          />
        </div>

        {/* Temperature Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-6 mb-8 text-center">
          <p className="text-sm mb-2">Current Temperature</p>
          <div className="text-6xl font-bold">
            {Math.round(data?.main?.temp)}°C
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all">
            <p className="text-gray-600 mb-1">Humidity</p>
            <p className="text-2xl font-bold text-gray-800">
              {data?.main?.humidity}%
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all">
            <p className="text-gray-600 mb-1">Wind Speed</p>
            <p className="text-2xl font-bold text-gray-800">
              {data?.wind?.speed} m/s
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all">
            <p className="text-gray-600 mb-1">Feels Like</p>
            <p className="text-2xl font-bold text-gray-800">
              {Math.round(data?.main?.feels_like)}°C
            </p>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="mt-8 w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all"
        >
          Search Again
        </button>
      </div>
    </div>
  );
}
