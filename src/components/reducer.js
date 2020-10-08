export default function reducer (state, action) {
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      console.log ('actulizando la lista..');
      return {...state, countryList: action.payload};
    }
    case 'FILTER_BY_REGION': {
      const {regionSelected} = action.payload;

      if ('' === regionSelected) {
        return {...state, coutryFilteredByRegion: [], filterByRegion: ''};
      }

      const coutryFilteredByRegion = state.countryList.filter (
        country => country.region === regionSelected
      );

      return {...state, coutryFilteredByRegion, filterByRegion: regionSelected};
    }
    case 'SET_COUNTRY_BY_NAME': {
      let list;
      if (state.filterByRegion !== '') {
        list = state.coutryFilteredByRegion;
      } else {
        list = state.countryList;
      }
      const countryListByName = list.filter (country =>
        country.name.toLowerCase ().includes (action.payload.toLowerCase ())
      );
      return {...state, countryListByName};
    }
    default: {
      console.log ('No encontre nada para hacer :(');
      return state;
    }
  }
}
