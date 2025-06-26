export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" 
           style={{ backgroundImage: "url('/background/avatar.jpg')" }}></div>
      
      {/* Floating elements with various colors */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-persona-red rounded-full opacity-10 animate-float"></div>
      <div className="absolute top-60 right-20 w-24 h-24 bg-persona-white rounded-full opacity-10 animate-float" 
           style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-persona-gray rounded-full opacity-5 animate-float" 
           style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-deep-magenta rounded-full opacity-10 animate-float" 
           style={{animationDelay: '1.3s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-phantom-purple rounded-full opacity-8 animate-float" 
           style={{animationDelay: '2.5s'}}></div>
      
      {/* Color glows */}
      <div className="absolute left-1/3 top-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-deep-magenta to-transparent opacity-5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-persona-red to-transparent opacity-5 blur-3xl"></div>
    </div>
  );
}
