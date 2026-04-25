const TableSkeleton = ({ rows = 6, cols = 5 }) => {
  const skeletonRows = Array(rows).fill(0);
  const skeletonCols = Array(cols).fill(0);

  return (
    <div className="w-full bg-(--color-surface) rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="flex bg-(--color-table-header) p-4 border-b border-gray-200">
        {skeletonCols.map((_, index) => (
          <div key={index} className="h-4 bg-gray-200/60 rounded w-full mx-2" />
        ))}
      </div>

      {skeletonRows.map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex p-4 border-b border-gray-100 animate-pulse items-center"
        >
          {skeletonCols.map((_, colIndex) => (
            <div
              key={colIndex}
              className="h-4 bg-gray-100 rounded w-full mx-2"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;
