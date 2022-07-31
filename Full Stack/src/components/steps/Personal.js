import axios from "axios";
import { useState } from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import ImageUpload from "../ImageUpload";

export default function Personal() {
  const { userData, setUserData } = useStepperContext();
  localStorage.clear()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  // async function handleImgChange(e){
  //   const formData = new FormData()
  //   formData.append('img_url',e.target.files[0])
  //   await axios.post('http://3.73.63.133:9000/uploadimg', formData)
  // }

  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Height in CM
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["height"] || ""}
            name="height"
            placeholder="Height in CM"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Wheight in KG
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["weight"] || ""}
            name="weight"
            placeholder="Weight in KG"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Age
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["age"] || ""}
            name="age"
            placeholder="Age"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        {/* <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
          type='file'
          onChange={(e)=>handleImgChange(e)}
          value={userData["image_url"] || ""}
          name="image_url"
          placeholder="Image"
          className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div> */}
        <ImageUpload />
      </div>
    </div>
  );
}
