const nameList = [
  {
    name: "John",
    age: 24,
    occupation: "Engineer",
  },
  {
    name: "Doe",
    age: 28,
    occupation: "Doctor",
  },
  {
    name: "Michael",
    age: 32,
    occupation: "Teacher",
  },
  {
    name: "Daryl",
    age: 29,
  },
];

const ageGroupAbove28 = nameList.filter((i) => i.age > 28);

const totalAge = nameList.reduce((a, b) => a + b["age"], 0);

const templateArray = nameList.map(
  (i) => `${i.name} - ${i.occupation || "Not found"}`
);

console.log(
  "Each answers to respective questions are ",
  ageGroupAbove28,
  totalAge,
  templateArray
);
