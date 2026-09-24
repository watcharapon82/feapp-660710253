function ProfileCard({
  name,
  nickname,
  major = "ยังไม่ระบุสาขา",
  favorites = [],
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-100
        bg-white
        p-6
        shadow-md
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <h3 className="text-lg font-bold text-slate-800">
        {name}
        <span className="ml-1 text-cyan-600">
          ({nickname})
        </span>
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        สาขา: {major}
      </p>

      <div className="mt-4">
        <p className="mb-2 text-sm font-semibold text-slate-700">
          ของโปรด
        </p>

        <ul className="flex flex-wrap gap-2">
          {favorites.map((item, index) => (
            <li
              key={index}
              className="
                rounded-full
                bg-cyan-50
                px-3
                py-1
                text-xs
                font-medium
                text-cyan-700
              "
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
