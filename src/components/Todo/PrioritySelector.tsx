import { Priority } from "../../utils/types";
import { getPriorityColorClass } from "../../utils/getPriorityColor";

interface PrioritySelectorProps {
  value: Priority;
  onChange: (value: Priority) => void;
}

const PrioritySelector: React.FC<PrioritySelectorProps> = ({
  value,
  onChange,
}) => {
  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChange(event.target.value as Priority);
  };

  return (
    <div className="form-control gap-1">
      <label htmlFor="priority">Set Priority Level</label>
      <select
        id="priority"
        name="priority"
        value={value}
        onChange={handlePriorityChange}
        className={`select select-bordered bg-slate-800 ${getPriorityColorClass(
          value
        )}`}
      >
        <option value="" disabled>
          Select Priority Level
        </option>
        {Object.values(Priority).map((priority) => (
          <option key={priority} value={priority}>
            {priority}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PrioritySelector;
