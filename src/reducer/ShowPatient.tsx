import { Patient } from "src/components/Data";

const initialState:Patient[] = [];
const ShowPatient = (state: Patient[] = initialState, action:{type: string}) =>{
    return state;
}
export default ShowPatient;