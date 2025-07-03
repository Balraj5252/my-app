// import SettingsIcon from '@material-ui/icons/Settings';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import BlockIcon from '@material-ui/icons/Block';
import { BsFiletypeXlsx } from "react-icons/bs";
import Analysis from "../../images/background/analys.png";
import Compare from "../../images/background/compareXlsx.png";
export const dataProd =[
    {
        id: 1,
        name: "Analysis",
        icon: <BsFiletypeXlsx />,
        bgImage: Analysis,
        "note": "Different type of views",
        link: "/my-app/xlsx/analysis"
    },

    {
        id: 2,
        name: "Compare",
        // icon: <ThumbUpIcon></ThumbUpIcon>,
        bgImage: Compare,
        "note": "comparing two xlsx",
        link: "/my-app/xlsx/compare"
    },


];
