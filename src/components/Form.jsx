import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ onClose }) => {
  const navigate = useNavigate();
  const [Tract, setTract] = useState({
    name: "",
    email: "",
    number: "",
    tractor: "",
    model: "",
    price: "",
    images: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTract((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("successfuly");
    console.log("Submitted", Tract);
    // navigate("/")
  };
  return (
    <div className="h-screen flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="bg-amber-50 backdrop-blur-xl outline outline-black/30 rounded-2xl justify-center items-center flex-col overflow-hidden max-w-[70vw] p-8"
      >
        <div className="flex justify-start items-center gap-10 mb-5">
          <div>
            <label>Name</label>
            <input
              name="name"
              placeholder="Enter your name"
              value={Tract.name}
              onChange={handleChange}
              className="w-full outline outline-black/30 rounded-sm p-4 bg-gray-200/80"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Example@gmail.com"
              value={Tract.email}
              onChange={handleChange}
              className="w-full outline outline-black/30 rounded-sm p-4 bg-gray-200/80"
            />
          </div>
        </div>

        <div className="mb-4">
          <label>Number</label>
          <input
            type="tel"
            name="number"
            placeholder="Number"
            value={Tract.number}
            onChange={handleChange}
            className="w-full outline outline-black/30 rounded-sm p-4 bg-gray-200/80"
          />
        </div>

        <div className="py-4">
          <label className="mr-3">Tractor Brand</label>
          <select
            name="tractor"
            value={Tract.tractor}
            onChange={handleChange}
            className="outline p-1 mr-8 rounded-sm w-[30vw]"
          >
            <option value="">Select Brand</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Swaraj">Swaraj</option>
            <option value="John Deere">John Deere</option>
            <option value="Sonalika">Sonalika</option>
            <option value="New Holland">New Holland</option>
            <option value="Eicher">Eicher</option>
            <option value="Messy Ferguson">Messy Ferguson</option>
            <option value="Powertac">Powertrack</option>
            <option value="other">Other Tractor Brand</option>
          </select>

          <label className="mr-3">Model</label>
          <select
            name="model"
            value={Tract.model}
            onChange={handleChange}
            className="outline p-1 rounded-sm w-[15vw]"
          >
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>

            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>

        <div className="mb-8">
          <label>Price</label>
          <input
            type="Number"
            name="price"
            placeholder="Enter Price"
            value={Tract.price}
            onChange={handleChange}
            className="w-full outline outline-black/30 rounded-sm p-4 bg-gray-200/80 mb-5"
          />
          <label>Images</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            className="w-full outline outline-black/30 rounded-sm p-4 bg-gray-200/80 p-4 cursor-pointer"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setTract((prev) => ({
                ...prev,
                images: files,
              }));
            }}
          />
        </div>

        <div className="flex gap-10">
          <button
            type="submit"
            className="bg-amber-400 p-4 w-full rounded-full"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-red-400 p-4 w-full rounded-full"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
