const TeamSkeleton = ({ count = 8 }) => {
  const skeletonItems = Array(count).fill(0);

  return (
    <div className="bg-(--color-surface) rounded-lg border border-gray-200 p-4 space-y-4">
      {skeletonItems.map((_, i) => (
        <div key={i} className="flex items-center gap-3 animate-pulse">
          <div className="w-9 h-9 bg-gray-200 rounded-full shrink-0" />
          
          <div className="flex-1">
            <div className="h-3 bg-gray-100 rounded w-3/4 mb-2" />
            <div className="h-2 bg-gray-50 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSkeleton;