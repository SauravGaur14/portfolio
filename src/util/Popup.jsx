export default function Popup({ message1="", message2="", onClick }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-start gap-1 rounded bg-white p-5 text-lg shadow-2xl">
        <h2 className="font-semibold">{message1}</h2>
        <p className="text-base">{message2}</p>
        <button
          className="mt-2 self-end text-base text-blue-500"
          onClick={onClick}
        >
          Close
        </button>
      </div>
    </div>
  );
}
