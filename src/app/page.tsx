import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1> It is Landing</h1>
      <Link href={"/users"}> Go to users </Link>
    </div>
  );
}
