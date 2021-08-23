// 클라우디나리 REST API 통신

class ImageUpload {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "pkllus2y");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dpzg13oq4/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUpload;
