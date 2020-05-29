import PageLayout from '@layouts/PageLayout'

const Typography = () => (
  <PageLayout>
    <article>
      <div id="headings">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>

      <div id="copy">
        <p>
          Now that we know who you are, I know who I am. I'm not a mistake! It
          all makes sense! In a comic, you know how you can tell who the
          arch-villain's going to be? He's the exact opposite of the hero. And
          most times they're friends, like you and me! I should've known way
          back when... You know why, David? Because of the kids. They called me
          Mr Glass.
        </p>

        <p>
          Your bones don't break, mine do. That's clear. Your cells react to
          bacteria and viruses differently than mine. You don't get sick, I do.
          That's also clear. But for some reason, you and I react the exact same
          way to water. We swallow it too fast, we choke. We get some in our
          lungs, we drown. However unreal it may seem, we are connected, you and
          I. We're on the same curve, just on opposite ends.
        </p>
      </div>
      <div id="list">
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
          <li>List Item 4</li>
          <li>List Item 5</li>
        </ul>
      </div>
    </article>
  </PageLayout>
)

export default Typography
