export function isValidURL(url: string): boolean {
  const regex =
    /^(https?:\/\/)?((localhost:\d+)|([\w\-]+(\.[\w\-]+)+))([^\s]*)$/i
  return regex.test(url)
}
