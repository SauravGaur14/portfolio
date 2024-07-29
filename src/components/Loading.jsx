export default function Loading() {
  return (
    <div className="boerder-black flex w-full animate-pulse flex-col items-center justify-center gap-y-8 rounded-lg p-5">
      <div className="h-64 w-full rounded-xl bg-slate-300 sm:w-1/2"></div>
      <div className="h-20 w-full rounded-xl bg-slate-300 sm:w-1/2"></div>
    </div>
  );
}
