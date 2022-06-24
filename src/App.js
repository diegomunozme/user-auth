import React, { useState } from "react";
import app from "./firebase-config";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const Schools = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = app.collection();
  console.log(ref)
  const db = getFirestore(app);
  console.log(db.collection("schools"));

  if (loading) {
    return <h1>Loading...</h1>;
  };
  return (
    <div>
      <h1>Schools</h1>
      {schools.map((school) => (
        <div key={school.id}>
          <h2>{school.title}</h2>
          <p>{school.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Schools;