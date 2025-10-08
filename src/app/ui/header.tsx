import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div
        style={{
          flexDirection: "row",
          height: "40px",
          width: "auto",
          display: "flex",
        }}
      >
        <Image
          src="/header/vpb-icon-brand.png"
          alt="VPB Brand Logo"
          width={140}
          height={56}
          style={{ height: "38px", width: "auto", alignSelf: "flex-end" }}
        />
        <Image
          src="/header/aws-icon.png"
          alt="AWS Logo"
          width={140}
          height={56}
          style={{ height: "31px", width: "auto", alignSelf: "flex-end" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "28px",
          marginLeft: "48px",
          gap: "36px",
        }}
      >
        <Link href="#section-overview">
          <h3>Overview</h3>
        </Link>
        <Link href="#section-timeline">
          <h3>Timeline</h3>
        </Link>
        <Link href="#section-mentors">
          <h3>Mentors</h3>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "40px",
          marginLeft: "48px",
          gap: "24px",
          backgroundColor: "white",
          padding: "0px 24px",
          borderRadius: "24px",
        }}
      >
        <Link href="#section-register">
          <h3 style={{ color: "rgb(0, 181, 79)" }}>Register</h3>
        </Link>
      </div>
    </header>
  );
}
