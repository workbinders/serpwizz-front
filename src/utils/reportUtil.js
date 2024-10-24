export const getHostName = (url) => {
  try {
    const urlObject = new URL(url)
    const hostname = urlObject.hostname.replace('www.', '')
    return hostname
  } catch (error) {
    return url.replace('www.', '')
  }
}
