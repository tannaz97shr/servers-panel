import { useState } from "react";

import FilterBox from "../components/filterBox/filterBox";

const MainPage = () => {
  const [minimumUptime, setMinimumUptime] = useState<number>();
  const [maximumUptime, setMaximumUptime] = useState<number>();
  return (
    <div>
      <FilterBox />
      main page
    </div>
  );
};

export default MainPage;
