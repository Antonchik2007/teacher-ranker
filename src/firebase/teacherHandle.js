
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebase";



export const initializeTeachers = async (teachers) => {
    teachers.map(async (teacher) => {
        try{    
            await setDoc(doc(db, 'teachers', teacher.name), {
                name: teacher.name,
                rating: teacher.rating,
                ratingAmount: 0,
                comments: [{"author": 'Student', 'text': 'This is a comment and I hate this teacher'}],
                schoolDepartment: teacher.schoolDepartment,
                phones: {'phoneYes': 0, 'phoneNo': 0, 'phoneMaybe': 0},
                difficulty: {'veryEasy': 0, 'easy': 0, 'medium': 0, 'hard': 0, 'veryHard': 0,}  
            })
        }catch(e){
            console.log(e.message);
            
        }
    })
    
}