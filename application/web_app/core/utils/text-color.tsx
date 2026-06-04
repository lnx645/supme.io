import React from "react";

export const formatTextWithColor = (text: string) => {
  // Regex untuk mencari teks di dalam kurung kurawal, termasuk kurung kurawalnya
  const parts = text.split(/(\{.*?\})/g);

  return parts.map((part, index) => {
    // Jika teks diawali dengan '{' dan diakhiri dengan '}', beri warna merah
    if (part.startsWith("{") && part.endsWith("}")) {
      return (
        <span key={index} className="text-red-500 font-semibold">
          {part}
        </span>
      );
    }

    // PERBAIKAN: Bungkus teks biasa dengan fragment agar tipe datanya konsisten sebagai JSX
    return <span key={index}>{part}</span>;
  });
};
