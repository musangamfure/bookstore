import React from 'react';

import { useSelector } from 'react-redux';

const Categories = () => {
  const category = useSelector((state) => state.categories);

  return (
    <div>
      <h2>Categories</h2>
      <p>{category}</p>
    </div>
  );
};

export default Categories;
