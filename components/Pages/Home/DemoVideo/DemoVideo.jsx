"use client";

const DemoVideo = () => {
  return (
      <div className="py-[80px]">
            <section className="relative w-full h-[400px] overflow-hidden">

      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/Jb7d5GMQzQs?autoplay=1&mute=1&loop=1&playlist=Jb7d5GMQzQs&controls=0&showinfo=0&modestbranding=1"
        title="YouTube video background"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

    
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">
       
      </div>
    </section>
      </div> 

  );
};

export default DemoVideo;
