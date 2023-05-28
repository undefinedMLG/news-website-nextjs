"use client"
import { useState, useEffect } from 'react';
import Carousel from 'react-carousel';
import axios from 'axios';

const Carousell = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://undefinednews.vercel.app/api/v2/news  ');
      setData(response.data);
    };
    fetchData();
  }, []);

  console.log(data)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={""}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <button  onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousell;
