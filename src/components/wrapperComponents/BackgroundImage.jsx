import React, { Fragment } from 'react'

const BackgroundImage = ({
  image,
  color,
  addlStyles,
  addlClasses,
  children,
}) => {
  let overlayColor

  switch (color) {
    case 'yellow':
      overlayColor = 'rgba(152, 113, 0, .5)'
      break

    case 'black':
      overlayColor = 'rgba(0, 0, 0, .65)'
      break

    case 'blue':
      overlayColor = 'rgba(24, 65, 99, 0.75)'
      break

    case 'teal':
      overlayColor = 'rgba(36, 142, 118, 0.65)'
      break

    default:
      break
  }

  return (
    <Fragment>
      {color ? (
        <div
          style={{
            backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(${image})`,
          }}
          className={`bg-no-repeat bg-center bg-cover flex items-center justify-center ${addlClasses}`}
        >
          {children}
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${image}')`, addlClasses }}
          className={`relative bg-no-repeat bg-center bg-cover flex items-center justify-center ${addlClasses}`}
        >
          {children}
        </div>
      )}
    </Fragment>
  )
}

export default BackgroundImage
