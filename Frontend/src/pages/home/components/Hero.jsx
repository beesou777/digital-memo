const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="relative bg-yellow-50">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex flex-wrap items-center px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="text-4xl font-bold text-yellow-900 md:text-5xl lg:w-10/12">
                Your favorite dishes, right at your door
              </h1>
              <form action="" className="w-full mt-12">
                <div className="relative flex p-1 bg-white border border-yellow-200 rounded-full shadow-md md:p-1">
                  <select
                    className="hidden p-3 bg-transparent rounded-full md:block md:p-4"
                    name="domain"
                    id="domain"
                  >
                    <option value="design">FastFood</option>
                    <option value="development">Restaurant</option>
                    <option value="marketing">Marketing</option>
                  </select>
                  <input
                    placeholder="Your favorite food"
                    className="w-full p-4 rounded-full"
                    type="text"
                  />
                  <button
                    type="button"
                    title="Start buying"
                    className="px-2 py-1 ml-auto text-center transition rounded-full bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                  >
                    <span className="hidden font-semibold text-yellow-900 md:block">
                      Search
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 mx-auto text-yellow-500 md:hidden "
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
              </form>
              <p className="mt-8 text-gray-700 lg:w-10/12">
                Sit amet consectetur adipisicing elit.{" "}
                <a href="#" className="text-yellow-700">
                  connection
                </a>{" "}
                tenetur nihil quaerat suscipit, sunt dignissimos.
              </p>
            </div>
            <div className="ml-auto -mb-24 lg:-mb-100 lg:w-6/12">
              <img
                src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
