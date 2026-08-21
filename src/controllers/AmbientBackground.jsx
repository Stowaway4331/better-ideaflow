const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-violet/20 blur-[140px]"></div>
      <div className="absolute top-[60vh] left-[-15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-accent/10 blur-[160px]"></div>
      <div className="absolute top-[130vh] right-[-10%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-violet/10 blur-[150px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(3,3,4,0.6)_80%)]"></div>
    </div>
  );
};

export default AmbientBackground;
