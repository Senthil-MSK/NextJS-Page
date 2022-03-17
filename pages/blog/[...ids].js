//URL :==> doaminName/blog/any/thing/can/be/given
// all these values will be as array becoz of []...ids] in file name

import React from "react";
import { useRouter } from "next/router";

function AllId(props) {
  const router = useRouter();
  console.log(router.query);
  return <div>Displaing all Ids</div>;
}

export default AllId;
