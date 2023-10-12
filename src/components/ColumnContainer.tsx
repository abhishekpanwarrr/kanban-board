import TrashIcon from "../icons/TrashIcon";
import { Column } from "../types";

interface ColumnContainerProps {
  column: Column;
}
const ColumnContainer = (props: ColumnContainerProps) => {
  const { column } = props;
  return (
    <div className=" bg-columnBackgroundColor w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
      {/* Column title */}
      <div className=" bg-mainBackgroundColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-columnBackgroundColor border-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-columnBackgroundColor px-2 py-1 text-sm rounded-full">
            0
          </div>
          {column.title}
        </div>
        <button>
            <TrashIcon />
        </button>
      </div>
      {/* Column task container */}
      <div className="flex flex-grow">content</div>
      {/* Column footer */}
    </div>
  );
};

export default ColumnContainer;
