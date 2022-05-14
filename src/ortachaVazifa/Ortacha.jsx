import React, { useEffect, useState } from "react";
function Ortacha() {
  const [rang, setRang] = useState("");
  const getData = () => {
    fetch("https://54.uz/rang.php")
      .then((res) => res.json())
      .then((data) => {
        let rang = data.status;
        if (rang === "qizil") {
          setRang("red");
        } else if (rang === "sariq") {
          setRang("yellow");
        } else if (rang === "qora") {
          setRang("black");
        } else if (rang === "ko'k") {
          setRang("blue");
        } else if (rang === "oq") {
          setRang("white");
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 style={{ color: rang }}>Random Color :{rang}</h2>
    </div>
  );
}

export default Ortacha;
