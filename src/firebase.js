
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyAimt7k9O5cqJC29vpnZoP2piztoa2J7jo",
  authDomain: "netflix-clone-6d9df.firebaseapp.com",
  projectId: "netflix-clone-6d9df",
  storageBucket: "netflix-clone-6d9df.firebasestorage.app",
  messagingSenderId: "415983252156",
  appId: "1:415983252156:web:6e4e293c3bf55e72b6d6b9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:'local',
            email,
        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const login = async (email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }catch(error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logout=()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};