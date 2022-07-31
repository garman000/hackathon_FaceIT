import { useStepperContext } from "../../contexts/StepperContext";

export default function Health() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        Average drinks per week
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["average_drink"] || ""}
            name="average_drink"
            placeholder="Average drinks per week"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Gender
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          {/* <input
            onChange={handleChange}
            value={userData["city"] || ""}
            name="city"
            placeholder="Gender"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          /> */}
          <select onChange={handleChange} value={userData['sex'||'']} name='sex'>
            <option></option>
            <option value='0'>Male</option>
            <option value='1'>Female</option>
          </select>
        </div>
      </div>
    </div>
  );
}
