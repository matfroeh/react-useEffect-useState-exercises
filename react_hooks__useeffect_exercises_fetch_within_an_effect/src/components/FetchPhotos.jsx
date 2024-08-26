import { useState, useEffect } from "react";

const FetchPhotos = () => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let ignore = false;
    const getPhotos = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos`
        );
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        if (!ignore) {
          setPhotos(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getPhotos();

    return () => {
      ignore = true;
    };
  }, []);

  return photos.map((p) => {
    return (
      <div key={p.id}>
        <img src={p.thumbnailUrl}></img>
      </div>
    );
  });
};

export default FetchPhotos;
