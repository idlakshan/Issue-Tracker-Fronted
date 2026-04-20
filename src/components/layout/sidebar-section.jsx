const SidebarSection = ({ title, children }) => {
  return (
    <div>
      <p className="text-xs font-semibold text-(--color-secondary-text) px-2 mb-2">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  );
};

export default SidebarSection;
