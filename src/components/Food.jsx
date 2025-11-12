import React, { useState } from "react";
import { data } from "../data/data.js";

function Food() {
  console.log(data);
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1134px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row*/}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between overflow-x-auto text-gray-500 text-xl">
            <button
              onClick={() => setFoods(data)}
              className="cursor-pointer border-none"
            >
              <img
                src="https://b.zmtcdn.com/data/pictures/1/20120691/effe7cbbf4224eb282a561cb20785b28_o2_featured_v2.jpg?output-format=webp"
                alt=""
                className="w-[131px] h-[66px] rounded-full my-1 object-cover"
              />
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="cursor-pointer border-none"
            >
              <img
                src="https://b.zmtcdn.com/data/dish_photos/04b/124626d415fac0c840840587651ad04b.jpg"
                alt=""
                className="w-[131px] h-[66px] rounded-full my-1"
              />
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="cursor-pointer  border-none"
            >
              <img
                src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
                alt=""
                className="w-[131px] h-[66px] rounded-full my-1"
              />
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="cursor-pointer  border-none"
            >
              <img
                src="https://b.zmtcdn.com/data/dish_photos/92f/6f24eceac929b926184ecc020784392f.jpg"
                alt=""
                className="w-[131px] h-[66px] rounded-full my-1"
              />
              Salad
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="cursor-pointer  border-none"
            >
              <img
                src="https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt=""
                className="w-[131px] h-[66px] rounded-full my-1"
              />
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="lg:grid lg:grid-cols-2 max-w-[390px] w-full flex justify-between">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white py-1 px-3 rounded-2xl">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
