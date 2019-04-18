import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import Downshift from "downshift";

import deburr from "lodash/deburr";

export function DownshiftMultiple(props) {
  const { classes, suggestions, onChange, placeholder } = props;
  const sRender = new SuggestionRender(suggestions, classes);
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);

  function handleKeyDown(event) {
    if (selectedItem.length && !inputValue.length && event.key === "Backspace") {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleChange(item) {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue("");
    setSelectedItem(newSelectedItem);
  }

  const handleDelete = item => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };

  return (
    <Downshift
      id="downshift-multiple"
      inputValue={inputValue}
      onChange={handleChange}
      selectedItem={selectedItem}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue: inputValue2,
        selectedItem: selectedItem2,
        highlightedIndex
      }) => (
        <div className={classes.container}>
          {sRender.renderInput({
            fullWidth: true,
            classes,
            InputProps: getInputProps({
              startAdornment: selectedItem.map(item => (
                <Chip
                  key={item}
                  tabIndex={-1}
                  label={item}
                  className={classes.chip}
                  onDelete={handleDelete(item)}
                />
              )),
              onChange: handleInputChange,
              onKeyDown: handleKeyDown,
              placeholder
            }),
            label: "Label"
          })}
          {isOpen ? (
            <Paper className={classes.paper} square>
              {sRender.getSuggestions(inputValue2).map((suggestion, index) =>
                sRender.renderSuggestion({
                  suggestion,
                  index,
                  itemProps: getItemProps({ item: suggestion.label }),
                  highlightedIndex,
                  selectedItem: selectedItem2
                })
              )}
            </Paper>
          ) : null}
        </div>
      )}
    </Downshift>
  );
}

export function DownshiftSingle(props) {
  const { classes, suggestions, onChange, placeholder } = props;
  const sRender = new SuggestionRender(suggestions, classes);
  return (
    <Downshift id="downshift-simple" onChange={onChange}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem
      }) => (
        <div className={classes.container}>
          {sRender.renderInput({
            fullWidth: true,
            classes,
            InputProps: getInputProps({
              placeholder
            })
          })}
          <div {...getMenuProps()}>
            {isOpen ? (
              <Paper className={classes.paper} square>
                {sRender.getSuggestions(inputValue).map((suggestion, index) =>
                  sRender.renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({ item: suggestion.label }),
                    highlightedIndex,
                    selectedItem
                  })
                )}
              </Paper>
            ) : null}
          </div>
        </div>
      )}
    </Downshift>
  );
}

class SuggestionRender {
  constructor(suggestions, classes) {
    this.suggestions = suggestions;
    this.popperNode = 0;
    this.classes = classes;
  }
  renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;

    return (
      <TextField
        InputProps={{
          inputRef: ref,
          classes: {},
          ...InputProps
        }}
        {...other}
      />
    );
  }

  renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || "").indexOf(suggestion.label) > -1;

    return (
      <MenuItem
        {...itemProps}
        key={suggestion.label}
        selected={isHighlighted}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {suggestion.label}
      </MenuItem>
    );
  }

  getSuggestions(value, { showEmpty = false } = {}) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0 && !showEmpty
      ? []
      : this.suggestions.filter(suggestion => {
          const keep =
            count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  }
}
