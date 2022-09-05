import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import StoresService from '../../api/services/StoresService';

const AutocompleteInput = ({ setCreds, creds, isError }) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleChangeId = (event, newValue) => {
    if (newValue) {
      setCreds({ ...creds, ticket: { ...creds.ticket, store: newValue.id } });
    } else setName('');
  };

  React.useEffect(() => {
    const getStores = async () => {
      try {
        const response = await StoresService.getStores({
          page: 1,
          limit: 10000,
          languageCode: 'en',
          title: name,
        });
        setOptions(response.data.items);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    if (name.length > 0) {
      getStores();
    } else setOptions([]);
  }, [name]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      onChange={handleChangeId}
      sx={{
        borderRadius: '8px',
        width: { xs: '300px', sm: '368px' },
        '.MuiOutlinedInput-root .MuiAutocomplete-input': {
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '20px',
          borderRadius: '8px',
          padding: '8px 8px 8px 16px',
        },
        '.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary': {
          padding: '0px',
          height: '48px',
          borderRadius: '8px',
        },
      }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.translations[0].title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          error={isError}
          onChange={handleChange}
          // label='Autocomplete'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color='inherit' size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default AutocompleteInput;
