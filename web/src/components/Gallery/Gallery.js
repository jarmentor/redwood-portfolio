import { styled } from 'linaria/react'

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.6rem;
  grid-template-rows: auto;
`

const GalleryItem = styled.img`
  width: 200px;
  height: auto;
`

const Gallery = ({ images }) => (
  <>
    <h3>Gallery</h3>
    <GalleryContainer>
      {images.map((image, counter) => (
        <GalleryItem key={counter} src={image} />
      ))}
    </GalleryContainer>
  </>
)

export default Gallery
