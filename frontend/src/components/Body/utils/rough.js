const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  // const x = [...items].sort((a, b) => a.value - b.value);
  // console.log(x);
  // console.log(items);
  
  const xx = items.map((data) => data.value).sort((a, b) => a - b);
  console.log(xx);
  