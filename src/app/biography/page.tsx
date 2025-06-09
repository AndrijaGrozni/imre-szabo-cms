export default function Biography() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Biography</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Imre Szabó is a renowned photographer with a passion for capturing the essence of life through his lens.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-gray-200 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  &ldquo;Photography is the art of capturing moments that tell stories, emotions that transcend time,
                  and beauty that exists in the ordinary.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Imre Szabó</div>
                  <div className="text-gray-600">Photographer</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              Born and raised in Hungary, Imre Szabó developed an early interest in photography. His journey
              began with a simple camera, capturing the world around him and developing a unique perspective
              on life through his lens.
            </p>
            <p className="mt-6">
              With over two decades of experience, Imre has established himself as a master of his craft,
              specializing in documentary and fine art photography. His work has been exhibited in numerous
              galleries and publications worldwide, earning him recognition and respect in the photography
              community.
            </p>
            <p className="mt-6">
              Imre&apos;s approach to photography is deeply personal and intuitive. He believes in capturing
              authentic moments that reflect the true essence of his subjects, whether they are people,
              landscapes, or urban scenes. His work often explores themes of human connection, cultural
              identity, and the relationship between nature and urban environments.
            </p>
            <p className="mt-6">
              Through his lens, Imre invites viewers to see the world from a different perspective,
              encouraging them to find beauty in the ordinary and meaning in the mundane. His photographs
              are not just images; they are stories waiting to be told, emotions waiting to be felt, and
              moments waiting to be remembered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 