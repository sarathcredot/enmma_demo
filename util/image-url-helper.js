// Utility function to get image full url from a given image url path
export function getImageUrl(imagePath) {
    return `${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${imagePath}`
}