// import SettingsIcon from '@material-ui/icons/Settings';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import BlockIcon from '@material-ui/icons/Block';
import { BsFiletypeXlsx } from "react-icons/bs";
import Xlsx from "../images/background/xlsx.jpg";
import Document from "../images/background/document.png"

export const dataProd =[
    {
        id: 1,
        name: "XLSX",
        icon: <BsFiletypeXlsx />,
        bgImage: Xlsx,
        link: "/my-app/xlsx"
    },

    {
        id: 2,
        name: "Document",
        icon: <BsFiletypeXlsx />,
        bgImage: Document,
        link: "/my-app/doc"
    },

    {
        id: 3,
        name: "Product Purchase",
        // icon: <BlockIcon></BlockIcon>,
        link: "/my-app"
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