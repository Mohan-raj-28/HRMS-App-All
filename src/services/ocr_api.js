// ocrApi.js
const OCR_API_BASE_URL =
  import.meta.env.VITE_OCR_API_URL || "http://127.0.0.1:8000";

export async function callOcr(filename) {
  const url = `${OCR_API_BASE_URL}/ocr/extract?filename=${encodeURIComponent(
    filename
  )}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("OCR request failed");
  }
  return res.json();
}
