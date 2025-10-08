import Link from "next/link";
import styles from "./body.module.css";
import dynamic from "next/dynamic";

const DynamicCountdown = dynamic(() => import("./countdown"), {
  ssr: true,
  loading: () => <p>Loading...</p>,
});

export default function Body({}) {
  return (
    <main
      className={styles.main}
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "stretch",
      }}
    >
      <div id="section-countdown" className={styles.countdown}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <h1 className={styles.title}>Countdown</h1>
          <DynamicCountdown
            style={{ height: "auto", width: "auto" }}
            toDate={new Date("2025-10-15T23:59:00+07:00")}
          />
        </div>
        <Link href="#section-register">
          <div
            style={{
              width: "222px",
              height: "72px",
              minWidth: "222px",
              backgroundColor: "rgb(0, 181, 79)",
              borderRadius: "36px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              alignSelf: "center",
              transform: "translateY(16px)",
            }}
          >
            {`Register Now!`}
          </div>
        </Link>
      </div>
      <div
        id="section-overview"
        style={{
          height: "360px",
          background:
            "linear-gradient(15deg, rgb(8, 71, 148), rgb(57, 166, 73))",
        }}
      >
        <h1 className={styles.title}>Overview section</h1>
        <h3
          style={{
            alignSelf: "center",
            justifySelf: "center",
            marginTop: "56px",
          }}
        >
          Contains event overview
        </h3>
      </div>
      <div
        id="section-timeline"
        style={{
          height: "560px",
          background:
            "linear-gradient(135deg, rgb(8, 71, 148), rgb(57, 166, 73))",
        }}
      >
        <h1 className={styles.title}>Timeline section</h1>
        <h3
          style={{
            alignSelf: "center",
            justifySelf: "center",
            marginTop: "56px",
          }}
        >
          Show timeline in a fashion way
        </h3>
      </div>
      <div
        id="section-mentors"
        style={{
          height: "560px",
          background:
            "linear-gradient(215deg, rgb(8, 71, 148), rgb(57, 166, 73))",
        }}
      >
        <h1 className={styles.title}>Mentors section</h1>
        <h3
          style={{
            alignSelf: "center",
            justifySelf: "center",
            marginTop: "56px",
          }}
        >
          Some people
        </h3>
      </div>
      <div
        id="section-register"
        style={{
          height: "640px",
          background:
            "linear-gradient(285deg, rgb(8, 71, 148), rgb(57, 166, 73))",
        }}
      >
        <h1 className={styles.title}>Register section</h1>
        <h3
          style={{
            alignSelf: "center",
            justifySelf: "center",
            marginTop: "56px",
          }}
        >
          Form will be here
        </h3>
      </div>
    </main>
  );
}
