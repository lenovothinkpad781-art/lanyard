import { put } from "@vercel/blob";

function sendError(res, status, message) {
  return res.status(status).json({ error: message });
}

function safeFilename(value) {
  return String(value || "foto-lanyard")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendError(res, 405, "Method tidak diizinkan.");
  }

  try {
    const filename = safeFilename(req.query.filename);
    const contentType = req.headers["content-type"] || "application/octet-stream";

    if (!contentType.startsWith("image/")) {
      return sendError(res, 400, "File harus berupa gambar.");
    }

    const blob = await put(`lanyard-photos/${Date.now()}-${filename}`, req, {
      access: "public",
      addRandomSuffix: true,
      contentType
    });

    return res.status(200).json({
      url: blob.url,
      pathname: blob.pathname
    });
  } catch (error) {
    console.error(error);
    return sendError(res, 500, "Upload foto ke Blob gagal.");
  }
}

export const config = {
  api: {
    bodyParser: false
  }
};
