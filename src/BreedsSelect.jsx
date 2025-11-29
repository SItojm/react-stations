import PropTypes from "prop-types";

/**
 * BreedsSelect
 * props:
 *  - breeds: string[]        // 犬種リスト
 *  - value: string           // 選択中の値
 *  - onChange: (newVal) => void // 選択時コールバック
 */
export const BreedsSelect = ({ breeds, value, onChange }) => {
  return (
    <div>
      <label htmlFor="breeds-select">犬種を選択：</label>
      <select
        id="breeds-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-- 選択してください --</option>
        {breeds.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
    </div>
  );
};

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
