import styles from "./command.module.scss";
import dayjs from "dayjs";
export default function Command() {
  return (
    <div className={styles.commandLine}>
      <span>
        <span
          style={{
            color: "var(--pink)",
          }}
        >
          {">"}
        </span>{" "}
        <span
          style={{
            color: "var(--orange)",
          }}
        >
          guest
        </span>{" "}
        on{" "}
        <span
          style={{
            color: "var(--purple)",
          }}
        >
          {dayjs().format("dddd")}
        </span>{" "}
        at{" "}
        <span
          style={{
            color: "var(--purple)",
          }}
        >
          {dayjs().format("h:mm a")}
        </span>
      </span>
      <span className={styles.input}>
        {"> "}
        <input autoFocus />
      </span>
    </div>
  );
}
