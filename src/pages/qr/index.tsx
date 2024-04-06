import React from "react";
import { api } from "~/utils/api";

const Home = () => {
  const { data: qrData } = api.qr.getQR.useQuery();
  return (
    <>
      <h2>QR</h2>
      <img src={qrData} />
    </>
  );
};

export default Home;
