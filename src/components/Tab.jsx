export default function Tab({ label, value, active, setActive }) {
  return (
    <button
      className={`roadmap-tab ${active === value ? "active" : ""}`}
      onClick={() => setActive(value)}
    >
      {label}
    </button>
  );
}
