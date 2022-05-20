// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app';
import { getAuth , GoogleAuthProvider , signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmQFZ03O5TGjdBKK-OWeUHYotv0rFTyRU",
  authDomain: "studentportal-83274.firebaseapp.com",
  projectId: "studentportal-83274",
  storageBucket: "studentportal-83274.appspot.com",
  messagingSenderId: "237379722992",
  appId: "1:237379722992:web:a75b85de02459a33ca2c35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export const SignInWithGoogle = () =>{
  signInWithPopup(auth,provider).then(res=>{
    dispatch({type:"LOGIN_SUCCESS", payload:res.data}); 
    
  }).catch(err=>{
            console.log(err);
        })
}
