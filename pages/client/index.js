//URL :==> doaminName/client

import Link from "next/link";
import React from "react";

function Client() {
  const clients = [
    {
      id: 101,
      name: "Senthil",
    },
    { id: 102, name: "Kumar" },
  ];

  return (
    <div>
      Client Main Page
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`client/${client.name}/${client.name}`}>
              {client.name}
            </Link>
            {/* Another way of having href in link */}
            <Link
              href={{
                pathname: "client/[id]/[nestedid]",
                query: { id: client.id, nestedid: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Client;
