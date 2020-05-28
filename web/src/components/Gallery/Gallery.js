import { styled } from 'linaria/react'

const GalleryContainer = styled.div`
  display: grid;
  max-width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2em;
  grid-template-rows: auto;
`

const GalleryItem = styled.img`
  width: 200px;
  height: 200px;
`

const Gallery = ({ images }) => (
  <GalleryContainer>
    {images.map((image, counter) => (
      <GalleryItem key={counter} src={image} />
    ))}
  </GalleryContainer>
)

export default Gallery
