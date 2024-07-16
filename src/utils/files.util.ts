import { File } from '@/app/files/dto'

export function filterTypesFiles(
  files: File[],
  notPermit: string[] = [
    'css',
    'html',
    'json',
    'md',
    'txt',
    'png',
    'jpg',
    'jpeg',
    'svg',
    'gif',
    'ico',
    'webp',
    'tiff',
    'bmp',
    'xml',
    'yml',
    'yaml',
    'lock',
    'lock.json',
    'lock.yaml',
    'lock.yml',
  ],
): File[] {
  return files.filter((file) => !notPermit.includes(file.type))
}
