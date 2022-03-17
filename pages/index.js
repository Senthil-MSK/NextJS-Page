//URL :==> doaminName/

import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleGotoPortfolio = () => {
    router.push("portfolio/anyvalue");
  };

  // another way of navigating from button
  const handleGotoClient = () => {
    router.push({
      pathname: "client/[id]/[nestedid]",
      query: { id: "101", nestedid: "msk" },
    });
  };

  return (
    <div className={styles.container}>
      Senthil
      <ul>
        <li>
          <Link href={"portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link replace href={"about"}>
            About
          </Link>
        </li>
        {/* Navigating Programatically */}
        <button onClick={handleGotoPortfolio}>Go to Portfolio</button>
        <button onClick={handleGotoClient}>Go to Client</button>
      </ul>
    </div>
  );
}
