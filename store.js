import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducer from './reducers/videos';

//esto se usaba para hacer el store tal cual react.
/*const store = createStore(reducer, {
	video: 'Fran'
})*/

//ahora se usa una libreria que nos ayuda a guardar la info
//usa local storage si es web i si es mobile usa asyncStorage
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['selectedMovie']
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };