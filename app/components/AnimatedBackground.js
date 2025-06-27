export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" 
           style={{ backgroundImage: "url('/background/background.jpg')" }}></div>
      
      {/* Enhanced floating elements with new colors */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-persona-red rounded-full opacity-10 animate-float"></div>
      <div className="absolute top-60 right-20 w-24 h-24 bg-arctic-blue rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-toxic-green rounded-full opacity-5 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-electric-purple rounded-full opacity-10 animate-float" style={{animationDelay: '1.3s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-lava-orange rounded-full opacity-8 animate-float" style={{animationDelay: '2.5s'}}></div>
      
      {/* Background patterns - using fallback to available images */}
      <div className="absolute right-10 top-1/4 w-48 h-48 opacity-15 animate-float" 
           style={{animationDelay: '1.5s'}}></div>
      <div className="absolute left-20 bottom-1/3 w-64 h-64 opacity-10 animate-float" 
           style={{animationDelay: '2.2s'}}></div>
           
      {/* Color glows */}
      <div className="absolute left-1/3 top-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-electric-purple to-transparent opacity-5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-lava-orange to-transparent opacity-5 blur-3xl"></div>
    </div>
  );
}
