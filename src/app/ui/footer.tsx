import styles from "./footer.module.css";
import Image from "next/image";

function ContactItem({
  icon: iconSrc,
  altText,
  text: contactText,
}: {
  icon: string;
  altText: string;
  text: string;
}) {
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Image
        src={iconSrc}
        alt={altText}
        width={24}
        height={24}
        style={{ width: "18px", height: "18px" }}
      />
      <h3
        style={{
          fontSize: "12px",
        }}
      >
        {contactText}
      </h3>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2
        style={{
          color: "rgb(57, 255, 146)",
        }}
      >
        {`VPBANK TECHNOLOGY HACKATHON 2025`}
      </h2>

      <h3
        style={{
          lineHeight: "35px",
        }}
      >
        Contact
      </h3>
      <div className={styles.contacts}>
        <ContactItem
          icon="/contact/facebook.svg"
          altText="Facebook Icon"
          text="Tuyển dụng VPBank"
        />
        <ContactItem
          icon="/contact/linkedin.svg"
          altText="LinkedIn Icon"
          text="VPBank"
        />
        <ContactItem
          icon="/contact/email.svg"
          altText="Email Icon"
          text="tuyendung@vpbank.com.vn"
        />
      </div>
    </footer>
  );
}
