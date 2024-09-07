import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useControl() {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    fetch("/api/control", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // for Test Code : console.log(res.message);
        setIsSuccess(res.message);
      });

    if ((isSuccess === "success") === true) navigate("/success");
    else if ((isSuccess === "fail") === true) {
      alert("제어에 실패했습니다!");
      navigate("/");
    }
  }, [isSuccess]);
}

export default useControl;
