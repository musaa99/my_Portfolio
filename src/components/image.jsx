export const Image = ({ title, largeImage, smallImage, href }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        <a
          href={href}
          title={title}
          data-lightbox-gallery='gallery1'
          target="_blank"
          rel="noreferrer"
        >
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}