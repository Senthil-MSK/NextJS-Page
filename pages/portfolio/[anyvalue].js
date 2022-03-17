//URL :==> doaminName/portfolio/

import React from "react";
import { useRouter } from "next/router";

function PortfolioPage(props) {
  const router = useRouter();

  console.log(router.pathname); //return the url path without domain
  console.log(router.query); //retunr the value which we pass in url

  return <div>Portfolio Page snip</div>;
}

export default PortfolioPage;
