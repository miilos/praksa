export default function Button({ cssStyle, children, onClick }) {
  return (
    <button className={`btn btn--${cssStyle}`} onClick={onClick}>
      {children}
    </button>
  );
}
