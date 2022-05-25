import React, { useEffect, useState } from "react";

export default function Home() {
  const [dataDemande, setDataDemande] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/sfac/api/demande/allDemandes")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
