import { useEffect, useState } from "react";
import { ISelectOption } from "src/interfaces/SelectOptionInterface";
import ChevronIcon, { ChevronDirection } from "../ChevronIcon/ChevronIcon";
import { SortBy } from 'src/constants/SortingOptions';
import "./SelectInput.scss";

interface SelectInputProps {
  options: Array<ISelectOption>;
  onChange: (optionId: SortBy) => void;
}

export default function SelectInput(props: SelectInputProps) {
  const { onChange, options } = props;
  const [isOpen, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ISelectOption | null>(null);

  const toggleSelectInput = () => setOpen(!isOpen);

  const _renderSelectOptions = (selectOptions: Array<ISelectOption>) => {
    const onOptionClick = (option: ISelectOption) => {
      setSelectedOption(option);
      toggleSelectInput();
    };

    return selectOptions.map((option: ISelectOption) => (
      <div className={`${selectedOption?.id === option.id ? 'option option--pressed' : 'option'}`} key={option.id} onClick={() => onOptionClick(option)}>
        {option.label}
      </div>
    ));
  };

  useEffect(() => {
    if(selectedOption) {
      onChange(SortBy[selectedOption.id as keyof typeof SortBy]);
    }
  }, [selectedOption, onChange])

  return (
    <div className="select-input" onClick={toggleSelectInput}>
      <div className="select-input__selected">
        <span className="label">{selectedOption?.label ?? "Sorting Criteria"}</span>
        <ChevronIcon direction={isOpen ? ChevronDirection.UP : ChevronDirection.DOWN} className="icon"/>
      </div>
      <div
        className={`select-input__options ${
          isOpen
            ? "select-input__options--opened"
            : "select-input__options--closed"
        }`}
      >
        {_renderSelectOptions(options)}
      </div>
    </div>
  );
}
