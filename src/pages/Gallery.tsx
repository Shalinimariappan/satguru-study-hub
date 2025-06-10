
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  // Year 1
  "assets/about.jpg",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format",
  
  // Year 2
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1558021211-6d1403321394?q=80&w=600&auto=format",
  
  // Year 3
  "https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=600&auto=format",
  
  // Year 4
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=600&auto=format",
  
  // Year 5
  "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format",
  
  // Year 6
  "https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1548449112-96a38a643324?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1629204884772-fe5589102d2b?q=80&w=600&auto=format"
];

interface LightboxProps {
  image: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ image, onClose, onPrev, onNext }: LightboxProps) => (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
    <button 
      className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
      onClick={onClose}
    >
      <X className="h-6 w-6" />
    </button>
    
    <button 
      className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
      onClick={onPrev}
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
    
    <img 
      src={image} 
      alt="Gallery" 
      className="max-h-[80vh] max-w-[80vw] object-contain"
    />
    
    <button 
      className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
      onClick={onNext}
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  </div>
);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const yearWiseImages = {
    "all": galleryImages,
    "year-1": galleryImages.slice(0, 4),
    "year-2": galleryImages.slice(4, 8),
    "year-3": galleryImages.slice(8, 12),
    "year-4": galleryImages.slice(12, 16),
    "year-5": galleryImages.slice(16, 20),
    "year-6": galleryImages.slice(20, 24)
  };
  
  const filteredImages = yearWiseImages[activeFilter as keyof typeof yearWiseImages];
  
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };
  
  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };
  
  const handlePrevImage = () => {
    const currentIndex = filteredImages.indexOf(selectedImage as string);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };
  
  const handleNextImage = () => {
    const currentIndex = filteredImages.indexOf(selectedImage as string);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div>
      <div className="relative py-16">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{
      backgroundImage:
        "url('/assets/banner.jpg')",
    }}
  ></div>

  {/* Color Overlay with 65% opacity */}
  <div className="absolute inset-0 bg-satguru" style={{ opacity: 0.65 }}></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center text-white">
    <h1 className="text-4xl font-bold mb-4">Gallery</h1>
    <p className="text-xl max-w-2xl mx-auto">
      Learn more about Satguru Study Centre and our commitment to educational excellence
    </p>
  </div>
</div>
      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Memories</h2>
            <div className="w-20 h-1 bg-satguru mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through moments captured during various activities, events, and celebrations
              at Satguru Study Centre over the past 6 years.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center mb-10">
            <button
              className={`px-5 py-2 m-1 rounded-full font-medium transition-colors ${
                activeFilter === "all"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All Photos
            </button>
            <button
              className={`px-5 py-2 m-1 rounded-full font-medium transition-colors ${
                activeFilter === "year-1"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("year-1")}
            >
              2019-2020
            </button>
            <button
              className={`px-5 py-2 m-1 rounded-full font-medium transition-colors ${
                activeFilter === "year-2"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("year-2")}
            >
              2020-2021
            </button>
            <button
              className={`px-5 py-2 m-1 rounded-full font-medium transition-colors ${
                activeFilter === "year-3"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("year-3")}
            >
              2021-2022
            </button>
            <button
              className={`px-5 py-2 m-1 rounded-full font-medium transition-colors ${
                activeFilter === "year-4"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("year-4")}
            >
              2022-2023
            </button>
            <button
              className={`px-5 py-2 m-1 rounded-full font-medium transition-colors ${
                activeFilter === "year-5"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("year-5")}
            >
              2023-2024
            </button>
            <button
              className={`px-5 py-2 m-1 rounded-full font-medium transition-colors ${
                activeFilter === "year-6"
                  ? "bg-satguru text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFilter("year-6")}
            >
              2024-2025
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={image} 
                    alt={`Gallery image ${index + 1}`} 
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox 
          image={selectedImage}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </div>
  );
}
