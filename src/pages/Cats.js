import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MyImg } from '../components/MyImg';

export function Cats() {
  let [listOfCats, setListOfCats] = useState([]);
  let [page, setPage] = useState(1);
  let isLoading = false;

  useEffect(() => {
    fetchCatImages();

    function handleScroll() {
      const isMobile = window.matchMedia('(max-width: 768px)').matches; // Ustaw odpowiednią wartość szerokości ekranu dla widoku mobilnego
    
      let threshold = 200; // Prog odświeżania dla widoku desktopowego
      if (isMobile) {
        threshold = 400; // Prog odświeżania dla widoku mobilnego
      }
    
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    
      if (scrollTop + windowHeight >= documentHeight - threshold && !isLoading) {
        setPage(prevPage => prevPage + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchCatImages();
    }
  }, [page]);

  function fetchCatImages() {
    isLoading = true;
    axios
      .get(`https://api.thecatapi.com/v1/images/search?limit=6&page=${page}`)
      .then(response => {
        let list = [];
        response.data.forEach(cat => {
          list.push(cat.url);
        });
        setListOfCats(prevList => [...prevList, ...list]);
        isLoading = false;
      })
      .catch(error => {
        console.log(error);
        isLoading = false;
      });
  }

  return (
    <div className='cat-list'>
      {listOfCats.map((cat, index) => (
        <div key={index}>
          <MyImg url={cat} />
        </div>
      ))}
    </div>
  );
}