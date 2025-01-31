import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
export default function TableHeading({
  name,
  sortable = true,
  sort_direction = null,
  sort_field = null,
  sortChanage = () => {},
  children,
}) {
  return (
    <th
      onClick={(e) => sortChanage(name)}
      className="px-3 py-3 cursor-pointer "
    >
        <div className="flex gap-1 items-center justify-between">
      {children} { sortable &&(
      <div>
        <ChevronUpIcon
          className={
            "w-4 " +
            (sort_field === name && sort_direction === "asc"
              ? "text-white"
              : " text-gray-400 ")
          }
        />
        <ChevronDownIcon
          className={
            "w-4 -mt-2 " +
            (sort_field == name && sort_direction == "desc"
              ? "text-white "
              : "text-gray-400 ")
          }
        />
      </div>
      )}
      </div>
    </th>
  );
}
