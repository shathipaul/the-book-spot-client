import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const {handleSubmit, register} = useForm();

  const handleAddProduct = (e) => {

    const image = e.picture[0];
    const formData = new FormData();

    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=121434ed25072b618fb998af7dda3f59`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          const productDetails = {
            bookName: e.bookName,
            buyingPrice: e.bookPrice,
            resellingPrice: e.sellingPrice,
            category: e.category,
            description: e.description,
            usedDuration: e.duration,
            location: e.location,
            img: imgData.data.display_url,
            userName: user.displayName,
            userEmail: user.email,
            userImg: user.photoURL,
          };

          fetch("https://b612-used-products-resale-server-side-shathipaul.vercel.app/addproduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(productDetails),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.acknowledged) {
                
                toast(`${e.name} is added successfully`);
              }
            });
        }
      })
      .catch((error) => {
        console.error("Book image upload Error:", error);
      });
  };
  return (
    <>
      <div className="lg:w-[70%] ">
        <form onSubmit={handleSubmit(handleAddProduct)} className="text-sm">
          <div className="xt-row xt-row-x-6 xt-row-y-4">
            <div className="w-full">
              <label className="block mb-3 font-medium text-gray-700">
                Book Name
              </label>
              <input
                type="text"
                id="bookName"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Input"
                {...register("bookName", {
                  required: "Book Name is required",
                })}
              />
            </div>


            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Buying Price
              </label>
              <input
                type="number"
                id="bookPrice"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Input"
                {...register("bookPrice", {
                  required: "Book Price is required",
                })}
              />

            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Re-selling Price
              </label>
              <input
                type="number"
                id="sellingPrice"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Input"
                {...register("sellingPrice", {
                  required: "Book Price is required",
                })}
              />

            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Duration of use
              </label>
              <input
                type="text"
                id="duration"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Input"
                {...register("duration", {
                  required: "Book Price is required",
                })}
              />
            </div>



            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Description
              </label>
              <textarea
                placeholder="Write about your book"
                className="block w-full h-20 max-h-48 rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none resize-vertical"
                aria-label="Textarea"
                {...register("description", {
                  required: "Book description is required",
                })}
              ></textarea>

            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Select category
              </label>
              <select
                className="block w-full xt-select rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Select"
                {...register("category", {
                  required: "Book Price is required",
                })}
              >
                <option defaultValue="">Select category</option>
                <option>Best Selling books</option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
              </select>
            </div>
            <div className="w-full">
              <label className="block mb-3 font-medium text-gray-700">
                Select Book picture
              </label>
              <input
                type="file"
                className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="File"
                {...register("picture", {
                  required: "picture is required",
                })}
              />
            </div>

            <div className="w-full my-3">
              <label className="block mb-3 font-medium text-gray-700">
                Select your location
              </label>
              <select
                className="block w-full xt-select rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Select"
                {...register("location", {
                  required: " Location is required",
                })}
              >
                <option defaultValue="">Select your district</option>
                <option>Dhaka</option>
                <option>Khulna</option>
                <option>Chittagong</option>
                <option>Sylhet</option>
                <option>Barisal</option>
                <option>Rangpur</option>
              </select>
            </div>

            <div className="w-full my-8">
              <button type="submit" className="btn btn-wide">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
