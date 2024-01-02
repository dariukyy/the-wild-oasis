import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}

export default SortBy;

//how to sort

// const sortBy = searchParams.get("sortBy") || "startDate-asc";
// const [field, direction] = sortBy.split("-");
// const modifier = direction === "asc" ? 1 : -1;

// function compare(a, b) {
//   if (a["name"].toLowerCase() < b["name"].toLowerCase()) {
//     return -1 * modifier;
//   }
//   if (a["name"].toLowerCase() > b["name"].toLowerCase()) {
//     return 1 * modifier;
//   }
//   return 0;
// }

// const sortedCabins =
//   field === "name"
//     ? filteredCabins.sort(compare)
//     : filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);
