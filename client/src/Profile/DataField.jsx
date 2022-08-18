const DataField = ({ label, data }) => {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-blue-800">
        {label}
      </span>

      <span className="border border-slate-400 rounded-md px-2 py-0.5">
        {data}
      </span>
    </div>
  );
};

export default DataField;