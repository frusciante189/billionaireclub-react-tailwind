import data from "../API/SpecsAPI";

const Specs = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto mt-24 px-4 md:px-0">
        <h1 className="text-text-primary text-xl font-semibold text-center mt-10">
          THE SPECS
        </h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 my-12">
          {data.map((item) => {
            return (
              <div
                className={`${item.class} text-white border border-gray-500 flex flex-col items-center md:px-6 md:py-10 px-3 py-5 group hover:bg-white`}
              >
                <h1 className="md:text-2xl text-lg font-bold group-hover:text-black">
                  {item.title}
                </h1>
                <p className="md:mt-6 mt-3 md:text-sm text-xs text-gray-400 text-center group-hover:text-black">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Specs;
