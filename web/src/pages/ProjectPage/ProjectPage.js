import PageLayout from '@layouts/PageLayout'
import Gallery from '@components/Gallery'
const ProjectPage = () => {
  return (
    <PageLayout>
      <img src="https://placehold.it/800x600" width="100% " alt="" />
      <h1>Project</h1>
      <p>
        Veniam est incididunt et ea nisi quis enim elit esse. Mollit sit esse
        labore ex magna laboris amet. Excepteur nostrud ea ut magna nostrud
        proident in veniam exercitation nisi. In mollit amet cupidatat
        adipisicing qui labore consequat minim culpa id ut. In irure eiusmod ut
        tempor commodo commodo ex irure. Laborum duis proident adipisicing
        reprehenderit labore consequat aliqua officia laborum excepteur irure
        qui nulla. Reprehenderit magna adipisicing labore dolor.
      </p>
      <Gallery
        images={[
          'https://placehold.it/200x200',
          'https://placehold.it/200x200',
          'https://placehold.it/200x200',
          'https://placehold.it/200x200',
          'https://placehold.it/200x200',
          'https://placehold.it/200x200',
          'https://placehold.it/200x200',
        ]}
      />
    </PageLayout>
  )
}

export default ProjectPage
