import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  const galleryData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setData(response.data);
  };

  useEffect(() => {
    galleryData();
  }, [index]);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4">

      {/* HEADER */}
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold">
          Page: {index}
        </h1>
      </div>

      {/* GALLERY */}
      {data.length === 0 ? (
        <h1 className="text-center text-gray-500">Loading...</h1>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.map((elem, inx) => (
            <a
              key={inx}
              href={elem.url}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="h-40 w-full">
                <img
                  className="h-full w-full object-cover"
                  src={elem.download_url}
                  alt=""
                />
              </div>
              <h1 className="text-sm p-2 text-center font-medium">
                {elem.author}
              </h1>
            </a>
          ))}
        </div>
      )}

      {/* BUTTONS */}
      <div className="flex justify-center items-center gap-4 mt-8">

        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setData([]);
            }
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Prev
        </button>

        <button
          onClick={() => {
            setIndex(index + 1);
            setData([]);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default App;


  // let userData = <h1 className=''>No user</h1>

  // if (data.length > 0) {
  //   userData = data.map((elem, inx) => {

  //     return <div id={inx} className="">
  //       <a href={elem.url} target='_blank'>
  //         <div className="">

  //         <div className='h-40 w-44'>
  //           <img className=' h-full w-full object-cover' src={elem.download_url} alt="" />
  //         </div>
  //         <h1>{elem.author}</h1>
  //         </div>
  //       </a>
  //     </div>

  //   })

  // }
