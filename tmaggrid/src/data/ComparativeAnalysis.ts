export const comparativeAnalysisData = [{
    name: "Population (ACS Est)",
    v1: 14827,
    q1: 3,
    v2: 32106,
    h2: 1343192,
    l2: 967
  },{
    name: "Population (Census 2010)",
    v1: 13142,
    q1: 3,
    v2: 30581,
    h2: 1197816,
    l2: 0
  },{
    name: "Population Change, 2010 to Est",
    v1: "12.82%",
    q1: 4,
    v2: "11.78%",
    h2: "1,131.75%",
    l2: "-14.21%"
  },{
    name: "Assessed Value",
    v1: 1089326162,
    q1: 3,
    v2: 1913849426,
    h2: 140237631635,
    l2: 8
  },{
    name: "Full Value",
    v1: 2602127484,
    q1: 2,
    v2: 2778502393,
    h2: 140237631635,
    l2: 56439692
  },{
    name: "Full Value YoY",
    v1: "6.03%",
    q1: 2,
    v2: "6.01%",
    h2: "43.88%",
    l2: "-8.12%"
  },{
    name: "Full Value per Capita",
    v1: 175499.26,
    s1: 4,
    q1: 4,
    v2: 73736.15,
    s2: 3,
    h2: 314261.70,
    l2: 18923.80,
    s3: 0
  },{
    name: "Med Income / State",
    v1: "216.73%",
    q1: 4,
    s1: 5,
    v2: "89.18%",
    s2: 3,
    h2: "269.68%",
    l2: "32.73%",
    s3: 0
  },{
    name: "Local Unemp Rate vs. State",
    v1: "30.51%",
    q1: 1,
    v2: "103.85%",
    h2: "345.10%",
    l2: "9.09%"
  },{
    name: "Cur Tax Collection Rate",
    v1: "98.81",
    q1: 4,
    v2: "588.10%",
    h2: "97,970.00%",
    l2: "66.52%"
  }];
  
  
export interface IComparativeAnalysis {
name: string,
v1: number | string,
s1?: number | null | undefined,
q1: number,
v2: number | string,
s2?: number | null,
h2: number | string,
l2: number | string,
v3?: number | null | undefined,
s3?: number | null,
h3?: number | null | undefined,
l3?: number | null | undefined,
};
  