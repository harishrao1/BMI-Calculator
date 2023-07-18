import React, { useState } from "react";

const BmiCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Enter Both heigth and Weight");
      return;
    }
    if (height < 100) {
      alert("Enter Valid Height between 1-100");
    }
    const WeightInKg = weight;
    const heightInMeters = height * 0.0254;
    const bmi = WeightInKg / (heightInMeters * heightInMeters);
    setResult(bmi);
    setAge("");
    setGender("Male");
    setWeight("");
    setHeight("");
  };

  const getBmiCategory = () => {
    if (!setResult) {
      return null;
    }

    // Male
    if (gender === "Male") {
      if (result < 18.5) {
        return "UnderWeight";
      } else if (result >= 18.5 && result <= 24.5) {
        return "Normal Weight";
      } else if (result >= 24.5 && result <= 29.9) {
        return "OverWeight";
      } else {
        return "Obesity";
      }
    } else {
      // Female
      if (result < 20.5) {
        return "UnderWeight";
      } else if (result >= 20.5 && result <= 26.9) {
        return "Normal Weight";
      } else if (result >= 27 && result <= 31.0) {
        return "OverWeight";
      } else {
        return "Obesity";
      }
    }
  };
  return (
    <div className="container">
      <h2 className="title"> BMI CALCULATOR</h2>
      <div className="form">
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Height(inches):
          <input
            type="number"
            step="0.01"
            min="24"
            max="96"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          Weight (kg):
          <input
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <button onClick={calculateBMI}>Compute</button>

        <br />

        {result && (
          <div className="bmiResult">
            <p>YOUR BMI: {result.toFixed(2)}</p>
            <p>BMI Category :{getBmiCategory()}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default BmiCalculator;
