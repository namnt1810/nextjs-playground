import styles from "./page.module.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import Body from "./ui/body";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
