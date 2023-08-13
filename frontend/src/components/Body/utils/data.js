export const filterTop = (data) => {
  const res = data.filter((data) => data?.avgRating > 4.5);
  return res;
};

export const filterHigh = (data) => {
  const res = [...data].sort((a, b) => b?.price - a?.price);
  return res;
};

export const filterLow = (data) => {
  const res = [...data].sort((a, b) => a.price - b.price);
  return res;
};

export function filterByName(searchInput, restaurant) {
  const data = restaurant.filter((res) =>
    res?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );
  return data;
}