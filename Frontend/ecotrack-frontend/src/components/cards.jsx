function Card({ title, value }) {
  return (
    <div className="bg-green-600 p-6 rounded-2xl shadow w-[300px]">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl text-green-600 mt-2">{value}</p>
    </div>
  );
}

export default Card;