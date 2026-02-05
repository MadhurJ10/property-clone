import React from "react";

const LocationMap = () => {
  return (
    <section className="w-full bg-white py-24">

      {/* ================= CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative h-[70vh] overflow-hidden rounded-lg">

          {/* MAP */}
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=ANWA%20BY%20OMNIYAT%20Dubai&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />

          {/* TEXT */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-white text-xl md:text-2xl tracking-wide">
              Use <span className="font-semibold">ctrl + scroll</span> to zoom the map
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default LocationMap;
