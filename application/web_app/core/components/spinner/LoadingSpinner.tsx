import clsx from "clsx";
import css from "./spinner.module.css";
const RingSpinner = ({ size = 20, color = "#7F77DD" }) => {
  const borderWidth = Math.max(2, Math.round(size / 10));

  return (
    <div
      role="status"
      aria-label="Memuat..."
      className={clsx(css.spinner)}
      style={{
        width: size,
        height: size,
        border: `${borderWidth}px solid #e5e7eb`,
        borderTopColor: color,
      }}
    />
  );
};
export default RingSpinner;
