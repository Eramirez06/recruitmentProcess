import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import homeSlice, {persistConfigHome} from 'features/Home/store/reducer';

const rootReducer = combineReducers({
  home: persistReducer(persistConfigHome, homeSlice),
});

export default rootReducer;
