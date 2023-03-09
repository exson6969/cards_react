import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const CardContainer = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed');
      setData(response.data);
    };

    fetchData();
  }, []);
  

  return (
    <div className="flex flex-wrap justify-center">
    {data.map((card) => (
      <Card
        key={card.id}
        title={card.title.rendered}
        description={card.excerpt.rendered}
        html={card.excerpt.rendered}
        link = {card.link}
        date = {card.date}
      />
    ))}
  </div>
  )
}

export default CardContainer