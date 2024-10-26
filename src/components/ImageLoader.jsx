import { AiOutlineLoading } from "react-icons/ai";
import { useState, useEffect } from 'react';
import { CiImageOff } from "react-icons/ci";


export default function ImageLoader({ url, ...rest }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoading(false)
      setError(false)
    };
    img.onerror = () => {
      setLoading(false)
      setError(true)
    };
    img.src = url;
  }, [url]);

  if (loading) {
    return <div className="h-28 max-h-full bg-slate-300 dark:bg-dark rounded-2xl flex justify-center items-center">
      <AiOutlineLoading className="text-3xl animate-spin" />
    </div>;
  } else {
    if (error) {
      return <div className="h-28 max-h-full bg-slate-300 dark:bg-dark rounded-2xl flex justify-center items-center">
        <CiImageOff className="text-3xl" />
      </div>;
    }
  }

  return <img {...rest} className={`rounded-2xl min-w-full min-h-full ${rest.className}`} src={url} />;
};