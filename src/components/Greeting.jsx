import React from "react";
import { Link } from "react-router-dom";

export default function Greeting() {
  return (
    <div className="greeting">
      <div className="greeting__text">
        <h2>Selamat Datang</h2>
        <p>
          CitarumRiver adalah sebuah aplikasi berbasis web yang berguna untuk
          melakukan monitoring terhadap sungai Citarum, yang dapat melakukan
          pengukuran volume air dari sungai dan juga memberikan pemberitahuan
          jika volume sungai tidak seperti biasanya.
        </p>
        <Link to="/auth/login">Pelajari selengkapnya...</Link>
      </div>
    </div>
  );
}
