const INSTRUCTIONS = [
  "📤 Upload your marks sheet and extract the data from the image",
  "💾 Save it our database for future references",
  "🔍 Search the data of user anytime",
  "📢 [Coming Soon] Compare marks of different users for insights",
  "😟 Not happy with results, try with clear image which is well lighted",
];

const Instructions = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-10">
      {INSTRUCTIONS.map((i, index) => (
        <div
          key={index}
          className="border border-gray-300 p-10 text-lg rounded-sm border-dashed"
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default Instructions;
