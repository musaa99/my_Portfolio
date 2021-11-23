import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='work' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Projects</h2>
          <p>
          This are some of my group and personal work.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage}  href={d.link} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
