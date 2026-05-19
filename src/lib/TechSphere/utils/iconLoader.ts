const iconCache = new Map<string, HTMLImageElement>();

export function loadIcon(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    if (iconCache.has(src)) {
      resolve(iconCache.get(src)!);
      return;
    }

    const img = new Image();
    img.src = src;

    img.onload = () => {
      iconCache.set(src, img);
      resolve(img);
    };

    img.onerror = reject;
  });
}
