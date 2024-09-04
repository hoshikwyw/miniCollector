import React, { useState } from 'react'
import SubNavBar from '../components/SubNavBar'
import { BsTrash } from "react-icons/bs";

const MeterBill = () => {
  const [records, setRecords] = useState([]);
  const [unitValue, setUnitValue] = useState("");
  const [lastMonthUnit, setLastMonthUnit] = useState("");
  const [thisMonthUnit, setThisMonthUnit] = useState("");
  const [differenceUnit, setDifferenceUnit] = useState("");

  const calcBill = () => {
    const unit = parseFloat(unitValue);
    const first = 30;
    const second = 20;
    const third = 25;
    const fourth = 25;
    const fifth = 50;
    const sixth = 50;
    const tax = 500;

    const one = first * 35;
    const two = second * 50;
    const three = third * 70;
    const four = fourth * 90;
    const five = fifth * 110;
    const six = sixth * 120;

    let result, total, a, b, c, d, e, f, g;

    if (unit <= 30) {
      result = unit * 35;
      total = result + tax;
    } else if (unit > 30 && unit <= 50) {
      a = unit - first;
      b = a * 50;
      result = one + b;
      total = result + tax;
    } else if (unit > 50 && unit <= 75) {
      a = unit - first;
      b = a - second;
      c = b * 70;
      result = one + two + c;
      total = result + tax;
    } else if (unit > 75 && unit <= 100) {
      a = unit - first;
      b = a - second;
      c = b - third;
      d = c * 90;
      result = one + two + three + d;
      total = result + tax;
    } else if (unit > 100 && unit <= 150) {
      a = unit - first;
      b = a - second;
      c = b - third;
      d = c - fourth;
      e = d * 110;
      result = one + two + three + four + e;
      total = result + tax;
    } else if (unit > 150 && unit <= 200) {
      a = unit - first;
      b = a - second;
      c = b - third;
      d = c - fourth;
      e = d - fifth;
      f = e * 120;
      result = one + two + three + four + five + f;
      total = result + tax;
    } else if (unit > 200) {
      a = unit - first;
      b = a - second;
      c = b - third;
      d = c - fourth;
      e = d - fifth;
      f = e - sixth;
      g = f * 125;
      result = one + two + three + four + five + six + g;
      total = result + tax;
    }

    const recordObj = {
      unit: unit + " unit",
      result: result + " kyats",
      total: total + " kyats",
    };
    setRecords([...records, recordObj]);
    setUnitValue("");

    return total + " kyats";
  };

  const calcUnit = () => {
    const difference = lastMonthUnit - thisMonthUnit;
    setDifferenceUnit(difference);
    // console.log(difference);
    setLastMonthUnit("");
    setThisMonthUnit("");
  };

  const delUnitbtn = () => {
    setDifferenceUnit("");
    setLastMonthUnit("");
    setThisMonthUnit("");
  };

  // Invoke the calcBill function with the desired unit values
  // useEffect(() => {
  // Invoke the calcBill function with the desired unit values
  // calcBill(124);
  // calcBill(112);
  // calcBill(79);
  // calcBill(79);
  // calcBill(84);
  // calcBill(99);
  // calcBill(240);
  // }, []);

  const delbtn = () => {
    setUnitValue("");
  };

  const deleteRecord = (index) => {
    const updatedRecords = [...records];
    updatedRecords.splice(index, 1);
    setRecords(updatedRecords);
  };

  return (
    <>
      <SubNavBar title="Calculate Meter Bill" />
      <div className="min-h-[calc(100vh-190px)] w-[70%] mx-auto bgShadow p-5 my-5 relative">
        <div className=" mt-10 flex flex-col gap-5">
          {/* <div className=" flex flex-col md:flex-row lg:flex-row gap-5 justify-center items-center my-5">
        <input
          type="text"
          className=" border-2 outline-none px-3 py-1 rounded-md bg-[#5f7adb] font-semibold w-fit"
          placeholder="Last Month Units"
          onChange={(e) => setLastMonthUnit(e.target.value)}
        />
        <input
          type="text"
          className=" border-2 outline-none px-3 py-1 rounded-md bg-[#5f7adb] font-semibold w-fit"
          placeholder="This Month Units"
          onChange={(e) => setThisMonthUnit(e.target.value)}
        />
        <button onClick={calcUnit} className=" border-2 px-3 py-1 rounded bg-[#a2b2ee] font-semibold">Calculate Unit</button>
        <button onClick={delUnitbtn} className=" border-2 px-3 py-1 rounded bg-[#a2b2ee] font-semibold">Cancel</button>
      </div> */}
          {/* <h2 className=" text-center font-bold tracking-widest my-4">Your Meter Unit is : {differenceUnit}</h2> */}
          <div className=" flex flex-col md:flex-row lg:flex-row gap-5 justify-center items-center">
            <input
              value={unitValue}
              onChange={(e) => setUnitValue(e.target.value)}
              type="number"
              className=" outline-none px-3 py-1 rounded-md bg-[#E3EFFF] font-semibold"
              placeholder="Enter your Meter Units"
            />
            <button
              onClick={calcBill}
              className=" px-3 py-1 rounded-md bg-[#E3EFFF] font-semibold">
              Calculate Bill
            </button>
            <button
              className=" px-3 py-1 rounded-md bg-[#E3EFFF] font-semibold"
              onClick={delbtn}>
              Cancel
            </button>
          </div>
          <table className="w-[90%] mx-auto bg-[#E3EFFF] rounded-xl shadow-gray-500">
            <thead>
              <tr className="border-blue-400 border-b">
                <th className="py-2 text-lg font-semibold">Unit</th>
                <th className="py-2 text-lg font-semibold">Result</th>
                <th className="py-2 text-lg font-semibold">Total (with tax)</th>
              </tr>
            </thead>
            {records.length !== 0 ? (
              <tbody>
                {records.map((record, index) => (
                  <tr key={index} className="py-5 hover:bg-[#77aaed] hover:text-white">
                    <td className="text-center py-3 cursor-pointer">{record.unit}</td>
                    <td className="text-center cursor-pointer">{record.result}</td>
                    <td className="text-center cursor-pointer">{record.total}</td>
                    <td className="flex justify-end items-center mt-2">
                      <button
                        className="flex items-center gap-2 px-3 py-1 rounded hover:text-red-600"
                        onClick={() => deleteRecord(index)}
                      >
                        Delete
                        <span className="group-hover:text-red-600">
                          <BsTrash />
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan={4} className="text-center p-10">
                    <h1>No records for now</h1>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  )
}

export default MeterBill
