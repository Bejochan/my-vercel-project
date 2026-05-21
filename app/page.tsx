export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-slate-950 text-slate-200 font-sans">
      <div className="max-w-2xl text-center space-y-6 p-10 border border-slate-800 rounded-3xl bg-slate-900/50 shadow-2xl backdrop-blur-sm">
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-emerald-400">Wazzzuppp cuy,</span><br/> 
          ini lagi nyoba-nyoba Vercel 🚀
        </h1>
        
        <p className="text-lg text-slate-400">
          Status Deployment: <span className="text-blue-400 font-mono bg-blue-950/50 px-2 py-1 rounded">Berhasil nge-deploy lewat Git.</span>
        </p>
        
        <div className="pt-6">
          <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-1">
            Ini modifikasinya hasil gemini btw!
          </button>
        </div>
        
      </div>
    </main>
  );
}