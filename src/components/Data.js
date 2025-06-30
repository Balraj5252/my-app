// import SettingsIcon from '@material-ui/icons/Settings';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import BlockIcon from '@material-ui/icons/Block';
import { BsFiletypeXlsx } from "react-icons/bs";

export const dataProd =[
    {
        id: Math.random(),
        name: "Manufactured Parts",
        icon: <BsFiletypeXlsx />,
        number: 235,
        link: "/"
    },

    {
        id: Math.random(),
        name: "Quality approved Parts",
        // icon: <ThumbUpIcon></ThumbUpIcon>,
        number: 20,
        link: "/home"
    },

    {
        id: Math.random(),
        name: "Defective Parts",
        // icon: <BlockIcon></BlockIcon>,
        number: 3,
        link: ""
    },


];

export const dataOperators = [
    {
        id: Math.random(),
        name: "operator1",
        objective: "50 parts",
        inprogress: "15 parts"

    },
    {
        id: Math.random(),
        name: "operator2",
        objective: "50 parts",
        inprogress: "12 parts"
    },
    {
        id: Math.random(),
        name: "operator3",
        objective: "50 parts",
        inprogress: "20 parts"
    }
];

export const notifications = [
    {
        notif1 : "This is a first notification with high priority",
    },
    {
        notif2 : "This is a second notification with medium priority",
    },
    {
        notif3 : "This is a thirs notification with low priority",
    }
];