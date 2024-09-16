export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="cta flex items-center justify-center p-4 text-center font-alegreya font-medium"
    >
      <span className="text-button text-center text-3xl font-bold">{text}</span>
      <svg width="25px" height="25px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
}