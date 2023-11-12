import Dropdown from "../../dropdown/Dropdown";
import '../elements/element.css';

const data = [
    {
        name: <Dropdown id="dropdown1" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.1'
    },
    {
        name: <Dropdown id="dropdown2" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.2'
    },
    {
        name: <Dropdown id="dropdown7" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.2'
    }, {
        name: <Dropdown id="dropdown3" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.2'
    }, {
        name: <Dropdown id="dropdown4" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.2'
    }, {
        name: <Dropdown id="dropdown5" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.2'
    }, {
        name: <Dropdown id="dropdown6" />,
        type: <span className='fileSpan'>קוֹבֶץ</span>,
        srNo: '.2'
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