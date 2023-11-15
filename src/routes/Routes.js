import DailyStudies from "../pages/DailyStudies/DailyStudies";
import StudiesForm from "../components/studiesForm/StudiesForm";
import SubCategories from "../pages/SubCategories/SubCategories";
import Links from "../pages/Links/Links";
import Consultation from "../pages/Consultation/Consultation";
import Request from "../pages/Requests/Requests";
import Definition from "../pages/Definition/Definition";
import HomeSlider from "../pages/HomeSlider/HomeSlider";
import DetailForm from "../pages/DetailForm/DetailForm";
import PopUpNews from "../pages/PopUpNews/PopUpNews";
import Categories from "../pages/Categories/Categories"
import Logout from "../pages/Logout/Logout";
import SocialForm from "../components/socialForm/SocialForm";

const routes = [
    {
        PATH: "/categories",
        ElEMENT: <Categories />
    },
    {
        PATH: "/subcategories",
        ElEMENT: <SubCategories />
    },
    {
        PATH: "/links",
        ElEMENT: <Links />
    },
    {
        PATH: "/consultation",
        ElEMENT: <Consultation />
    },
    {
        PATH: "/requests",
        ElEMENT: <Request />
    },
    {
        PATH: "/definition",
        ElEMENT: <Definition />
    },
    {
        PATH: "/daily-studies",
        ElEMENT: <DailyStudies />
    },
    {
        PATH: "/home-slider",
        ElEMENT: <HomeSlider />
    },
    {
        PATH: "/detail-form",
        ElEMENT: <DetailForm />
    },
    {
        PATH: "/logout",
        ElEMENT: <Logout />
    },
    {
        PATH: "/pop-up-news",
        ElEMENT: <PopUpNews />
    },
    {
        PATH: "/study-form",
        ElEMENT: <StudiesForm />
    },
    {
        PATH: "/social-form",
        ElEMENT: <SocialForm />
    },
];

export default routes;