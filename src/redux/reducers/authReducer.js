import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    accessToken: null,
    isAuthenticated: false,
    // player_type: null, // ✅ add this
    // fcmToken: null, // ✅ add this
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },

    // setPlayerType: (state, action) => {
    //   state.player_type = action.payload;
    // },
    // logout: (state,action)=>{
    //     state.user = null;
    //     state.token = null;
    // }
    setCredentials: (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user = user;
      state.isAuthenticated = true;

      // Persist to AsyncStorage
      AsyncStorage.setItem('accessToken', accessToken);
      if (user) {
        AsyncStorage.setItem('user', JSON.stringify(user));
      }
    },
    // setFCMToken: (state, action) => {
    //   state.fcmToken = action.payload;
    // },
    clearAuth: state => {
      state.token = null;
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.player_type = null;
    },
  },
});

export const { setToken, setUser, clearAuth , setCredentials} =
  authReducer.actions;

export default authReducer.reducer;



// import { createSlice } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     accessToken: null,
//     user: null,
//     isAuthenticated: false,
//     isLoading: true,
//   },
//   reducers: {
//     setCredentials: (state, action) => {
//       const { accessToken, user } = action.payload;
//       state.accessToken = accessToken;
//       state.user = user;
//       state.isAuthenticated = !!accessToken;

//       // Persist to AsyncStorage
//       if (accessToken) {
//         AsyncStorage.setItem('accessToken', accessToken);
//       }
//       if (user) {
//         AsyncStorage.setItem('user', JSON.stringify(user));
//       }
//     },
    
//     setToken: (state, action) => {
//       state.accessToken = action.payload;
//       state.isAuthenticated = !!action.payload;
//       if (action.payload) {
//         AsyncStorage.setItem('accessToken', action.payload);
//       }
//     },
    
//     setUser: (state, action) => {
//       state.user = action.payload;
//       if (action.payload) {
//         AsyncStorage.setItem('user', JSON.stringify(action.payload));
//       }
//     },
    
//     clearAuth: (state) => {
//       state.accessToken = null;
//       state.user = null;
//       state.isAuthenticated = false;
      
//       // Clear AsyncStorage
//       AsyncStorage.multiRemove(['accessToken', 'user']);
//     },
    
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//   },
// });

// // Thunk to load stored credentials on app start
// export const loadStoredCredentials = () => async (dispatch) => {
//   try {
//     const [accessToken, userString] = await AsyncStorage.multiGet([
//       'accessToken',
//       'user',
//     ]);

//     if (accessToken[1]) {
//       const user = userString[1] ? JSON.parse(userString[1]) : null;
//       dispatch(setCredentials({ accessToken: accessToken[1], user }));
//     }
//   } catch (error) {
//     console.error('Error loading stored credentials:', error);
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// export const { 
//   setCredentials, 
//   setToken, 
//   setUser, 
//   clearAuth, 
//   setLoading 
// } = authSlice.actions;

// export default authSlice.reducer;