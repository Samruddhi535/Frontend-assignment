// components/ImageGallery.js
const ImageGallery = () => (
  <section className="p-4">
    <h2 className="text-xl mb-2">Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <img src="/image1.jpg" alt="Image 1" className="w-full h-auto max-w-xs" />
      <img src="/image2.jpg" alt="Image 2" className="w-full h-auto max-w-xs" />
      <img src="/image3.jpg" alt="Image 3" className="w-full h-auto max-w-xs" />
    </div>

    <br />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <img src="/image4.jpg" alt="Image 4" className="w-full h-auto max-w-xs" />
      <img src="/image5.jpg" alt="Image 5" className="w-full h-auto max-w-xs" />
      <img src="/image6.jpg" alt="Image 6" className="w-full h-auto max-w-xs" />
    </div>

    <br />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <img src="/image1.jpg" alt="Image 7" className="w-full h-auto max-w-xs" />
      <img src="/image2.jpg" alt="Image 8" className="w-full h-auto max-w-xs" />
      <img src="/image3.jpg" alt="Image 9" className="w-full h-auto max-w-xs" />
    </div>

    <br />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <img src="/image4.jpg" alt="Image 10" className="w-full h-auto max-w-xs" />
      <img src="/image5.jpg" alt="Image 11" className="w-full h-auto max-w-xs" />
      <img src="/image6.jpg" alt="Image 12" className="w-full h-auto max-w-xs" />
    </div>



  </section>
);

export default ImageGallery;
