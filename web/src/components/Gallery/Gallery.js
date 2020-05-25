import './Gallery.css'
const Gallery = ({ images }) => {
  return (
    <div className="ImageGallery">
      {images.map((image, counter) => (
        <img key={counter} src={image} width="200" height="200" />
      ))}
    </div>
  )
}

export default Gallery
