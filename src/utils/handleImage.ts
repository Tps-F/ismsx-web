import sharp from 'sharp';

const convertToWebP = async (file: File, targetWidth: number): Promise<File> => {
  // ファイルをBufferに変換
  const buffer = await file.arrayBuffer();
  const imageBuffer = Buffer.from(buffer);

  const metadata = await sharp(imageBuffer).metadata();
  console.log(metadata)

  // WebPに変換
  const webpBuffer = await sharp(imageBuffer)
    .resize(targetWidth, Math.round((targetWidth / metadata.width) * metadata.height))
    .webp()
    .toBuffer();

  const webpBlob = new Blob([webpBuffer], { type: 'image/webp' });

  // BlobからFileオブジェクトを作成
  const webpFile = new File([webpBlob], `${file.name.replace(/\.[^/.]+$/, '')}.webp`, { type: 'image/webp' });

  return webpFile;
}

export const uploadImage = async (file: File, folder_name: string, index:number) => {
    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (r) => {
            const base64str = (r.target?.result as string).replace(/data:.*\/.*;base64,/, '');
            resolve(base64str);
          };
          reader.onerror = (e) => reject(e);
        });
      };
      const content = await fileToBase64(file);
      
      const data = JSON.stringify({
        branch: 'develop',
        message: 'upload image',
        content: `${content}`
      });
      
      const token = process.env.GATSBY_ASSETS_TOKEN;
      const owner = 'output0input';
      const repo = 'ismsx_assets';
      console.log(folder_name)
      const url = `https://api.github.com/repos/${owner}/${repo}/contents/assets/works/${folder_name}/${index}.webp`;
      console.log(token)
      const p = {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': file.type
        },
        body: data
      };
      
      const res = await fetch(url, p);
      if (res.ok) {
        const resJson = await res.json();
        console.log("Upload succeeded.", resJson.content.download_url);
      } else {
        console.log("Upload failed.", res.status);
      }
}

export const handleImage = async (file: File, folder_name: string, index:number) => {
  console.log("handleimage")
  const resolutions = [500, 1920]
  resolutions.map((conv_resolution) => (
    convertToWebP(file, conv_resolution).then((re_file) => (
      uploadImage(re_file, folder_name, index)
    )
      
  ))
  

  )

}