const mapImageThumbnails = (array = []) => array.map(({image_thumbnail, ...el}) => ({ ...el, image_thumbnail: `${process.env.REACT_APP_API_URL}/image/${image_thumbnail}` }))

export {mapImageThumbnails};