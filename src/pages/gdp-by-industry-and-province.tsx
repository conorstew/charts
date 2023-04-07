import React, { useEffect } from "react";
//import { csv } from "d3-fetch";
import * as d3 from "d3";
// import data from "@csv-files/gdp-by-industry-and-province/36100402.csv";
import Papa from "papaparse";

const provinceData = [
  {
    name: "Newfoundland and Labrador",
    classificationCode: "[10]",
    memberId: 1,
  },
  { name: "Prince Edward Island", classificationCode: "[11]", memberId: 2 },
  { name: "Nova Scotia", classificationCode: "[12]", memberId: 3 },
  { name: "New Brunswick", classificationCode: "[13]", memberId: 4 },
  { name: "Quebec", classificationCode: "[24]", memberId: 5 },
  { name: "Ontario", classificationCode: "[35]", memberId: 6 },
  { name: "Manitoba", classificationCode: "[46]", memberId: 7 },
  { name: "Saskatchewan", classificationCode: "[47]", memberId: 8 },
  { name: "Alberta", classificationCode: "[48]", memberId: 9 },
  { name: "British Columbia", classificationCode: "[59]", memberId: 10 },
  { name: "Yukon", classificationCode: "[60]", memberId: 11 },
  { name: "Northwest Territories", classificationCode: "[61]", memberId: 12 },
  { name: "Nunavut", classificationCode: "[62]", memberId: 13 },
];


// const fetchCsv = () => {
//   fetch("/src/csv-files/gdp-by-industry-and-province/36100402.csv").then(
//     (response) => {
//       let reader = response?.body?.getReader();
//       let decoder = new TextDecoder("utf-8");

//       return reader?.read().then(function (result) {
//         return decoder.decode(result.value);
//       });
//     }
//   );
// };

export default function GdpByIndustryAndProvince() {
  useEffect(() => {
    const parsed = Papa.parse(csvString);
    console.log(parsed)
  }, []);
  return <div>gB-I-industA-aP-province</div>;
}
