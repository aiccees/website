
export function ExhibitionHero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-700 to-emerald-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 pb-10 pt-10 text-center text-white">
        <div className="max-w-4xl mx-auto">      

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-white to-lime-400 bg-clip-text text-transparent">
            Exhibitions
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
            Showcase your clean energy products, technologies, and services to
            investors, policymakers, and industry leaders from across Africa.
            AICCEES 2026 brings exhibitors and conference delegates together on
            one floor in Port Harcourt.
          </p>         
        </div>
      </div>
    </div>
  );
}
