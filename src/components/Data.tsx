export interface Patient{
    status: string;
    patientId: number;
    patientName: string;
    chart: string;
    dob: string;
    gender: string;
    ssn: string;
    address: string;
    phone: number;
    action: string;
    

}
export const data: Patient[] = [
    {
        status: "Active",
        patientId: 1,
        patientName: "john", 
        chart: "asd",
        dob: "28/11/2018",
        gender: "",
        ssn: "",
        address: "",
        phone: 123,
        action: ""
    },
    {
        status: "None",
        patientId: 2,
        patientName: "marry", 
        chart: "asd",
        dob: "28/11/2018",
        gender: "",
        ssn: "",
        address: "",
        phone: 123,
        action: ""
    },
    {
        status: "Active",
        patientId: 3,
        patientName: "john", 
        chart: "asd",
        dob: "28/11/2018",
        gender: "",
        ssn: "",
        address: "",
        phone: 123,
        action: ""
    },
    {
        status: "None",
        patientId: 4,
        patientName: "marry", 
        chart: "asd",
        dob: "28/11/2018",
        gender: "",
        ssn: "",
        address: "",
        phone: 123,
        action: ""
    },
    {
        status: "Active",
        patientId: 5,
        patientName: "john", 
        chart: "asd",
        dob: "28/11/2018",
        gender: "",
        ssn: "",
        address: "",
        phone: 123,
        action: ""
    },
    {
        status: "None",
        patientId: 6,
        patientName: "marry", 
        chart: "asd",
        dob: "28/11/2018",
        gender: "",
        ssn: "",
        address: "",
        phone: 123,
        action: ""
    }
];