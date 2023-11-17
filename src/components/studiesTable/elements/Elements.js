import Dropdown from "../../dropdown/Dropdown";
import '../elements/element.css';

const data = [
    {
        name: <Dropdown id="dropdown1" numberOfItems='2' title1="לַעֲרוֹך" title2="לִמְחוֹק" title3="קטגוריות משנה" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.1'
    },
    {
        name: <Dropdown id="dropdown2" numberOfItems='2' title1="לַעֲרוֹך" title2="לִמְחוֹק" title3="קטגוריות משנה" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.2'
    },
    {
        name: <Dropdown id="dropdown7" numberOfItems='2' title1="לַעֲרוֹך" title2="לִמְחוֹק" title3="קטגוריות משנה" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.3'
    }, {
        name: <Dropdown id="dropdown3" numberOfItems='2' title1="לַעֲרוֹך" title2="לִמְחוֹק" title3="קטגוריות משנה" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.4'
    }, {
        name: <Dropdown id="dropdown4" numberOfItems='2' title1="לַעֲרוֹך" title2="לִמְחוֹק" title3="קטגוריות משנה" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.5'
    }, {
        name: <Dropdown id="dropdown5" numberOfItems='2' title1="לַעֲרוֹך" title2="לִמְחוֹק" title3="קטגוריות משנה" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.6'
    }, {
        name: <Dropdown id="dropdown6" numberOfItems='2' title1="לַעֲרוֹך" title2="לִמְחוֹק" title3="קטגוריות משנה" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.7'
    },
]


const column = [
    {
        name: <span className='categoryText'>קטגוריה</span>,
        selector: row => row.name
    },
    {
        name: <span className='studiesText'>לימודים יומיים</span>,
        selector: row => row.type
    },
    {
        name: <span className='seriolText'>לא.</span>,
        selector: row => row.srNo
    }
]


export { column, data };