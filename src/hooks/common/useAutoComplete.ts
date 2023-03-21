import usePlacesAutocomplete from 'use-places-autocomplete';

const useAutoComplete = () => {
  const { ready, value, setValue, suggestions, clearSuggestions } =
    usePlacesAutocomplete();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
  };

  return {
    ready,
    value,
    setValue,
    suggestions,
    handleSelect,
    clearSuggestions,
  };
};

export default useAutoComplete;
