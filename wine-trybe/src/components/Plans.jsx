import React, { useEffect, useState } from "react";
import { apiPlans } from "../services/api";

export default function Plans() {
  const [plans, setPlans] = useState();
  console.log(plans)

  useEffect(() => {
    apiPlans
      .get("/modalities")
      .then((response) => setPlans(response.data[0].plans))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
    </div>
  );
}