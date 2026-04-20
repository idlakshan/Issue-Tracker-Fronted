const CountCard = ({
  title,
  value,
  subtitle,
  icon,
  color = "text-(--color-text)",
}) => {
  return (
    <div className="bg-(--color-surface) border border-(--color-secondary-text)/10 rounded-xl p-5 flex justify-between shadow-xs">
      <div>
        <p className="text-sm text-(--color-secondary-text)">{title}</p>
        <h2 className={`text-[36px] font-semibold mt-1 ${color}`}>{value}</h2>
        <p className="text-xs text-(--color-secondary-text) mt-1">{subtitle}</p>
      </div>

      <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

export default CountCard;
