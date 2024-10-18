import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import deckstop from "@/public/images/like.png";
import mobile from "@/public/images/isLiked.png"

export default function Home() {
  return (
    <div className={styles.page}>
      <h1> It is Landing</h1>
      <Link href={"/users"}> Go to users </Link>
      {/* <Image alt="deckstop" src={deckstop} className={styles.imageDeckstop}/>
      <Image alt="mobile" src={mobile} className={styles.imageMobile} width={50} height={50}/> */}
    </div>
  );
}
