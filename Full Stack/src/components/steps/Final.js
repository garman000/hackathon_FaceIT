import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useStepperContext } from "../../contexts/StepperContext";

export default function Final() {
  const { userData } = useStepperContext();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let obesity = 0
  function calculateBMI() {
    obesity = (userData.weight / ((userData.height / 100) ** 2)) / 30
    userData.obesity = obesity
    delete userData.height
    delete userData.weight
    userData.average_drink = userData.average_drink * 4
    userData.physical_activity = userData.physical_activity * 4
    localStorage.setItem("userData", JSON.stringify((userData)))
  }
  calculateBMI()
  useEffect(async () => {
    const formData = new FormData();
    for (let key in userData) {
      formData.append(key, userData[key]);
    }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ' ' + pair[1]);
    }
    const response = await axios.post('http://3.73.63.133:8080/predict_age', formData)
    setIsLoading(false)
    const { data } = response
    console.log(data);
    const badImg = 'http://3.73.63.133:8080' + data.response.bad_img_url
    const goodImg = 'http://3.73.63.133:8080' + data.response.good_img_url
    localStorage.setItem('badImg', badImg)
    localStorage.setItem('goodImg', goodImg)

  }, []);

  const processData = () => {
    navigate("./result");
  };
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        {isLoading && (
          <img style={{ borderRadius: '14px' }} src="https://www.webtunix.ai/static/img/faceman.gif" />
        )}
        {/* <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div> */}

        {/* <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Congratulations!

        </div> */}
        {/* <div className="text-lg font-semibold text-gray-500">
          Your Account has been created.
        </div> */}
        {!isLoading && <a className="mt-10">
          <button
            onClick={processData}
            className="h-10 px-5 text-white-900 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-white-900"
            style={{ backgroundColor: "#3b3b3b", color: "white" }}
          >
            See Results
          </button>
        </a>}
      </div>
    </div>
  );
}
