import { css } from 'linaria'

const galleryStyles = css`
  display: grid;
  max-width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2em;
  grid-template-rows: auto;
`

const Gallery = ({ images }) => {
  return (
    <div className={galleryStyles}>
      {images.map((image, counter) => (
        <img key={counter} src={image} width="200" height="200" />
      ))}
    </div>
  )
}

export default Gallery
