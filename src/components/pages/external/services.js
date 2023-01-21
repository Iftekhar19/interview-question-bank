import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

const questionCollectionRef=collection(db,process.env.REACT_APP_COLLECTION);
class AllServices{
addQuestion=(newQuestion)=>
{
    return addDoc(questionCollectionRef,newQuestion);
}
getQuestions=()=>
{
    return getDocs(questionCollectionRef);
}
}
const allMethods=new AllServices();
export default allMethods;
