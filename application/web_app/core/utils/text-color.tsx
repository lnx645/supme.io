
export const formatTextWithColor = (text: string) => {
  const parts = text.split(/(\{.*?\})/g);

  return parts.map((part, index) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      return (
        <span key={index} className="text-red-500 font-semibold">
          {part}
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
};
