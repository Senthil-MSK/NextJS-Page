//URL :==> doaminName/client/[id]/[nestedid]

import React from "react";
import { useRouter } from "next/router";

function NestedClientPage() {
  const router = useRouter();
  console.log(router.query);

  return <div>NestedClientPage </div>;
}

export default NestedClientPage;
