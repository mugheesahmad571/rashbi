import Dropdown from "../../dropdown/Dropdown";
import '../elements/element.css';

const data = [
    {
        name: <Dropdown id="dropdown1" />,
        type: <span className='fileSpan'>יוטיוב</span>,
        srNo: '.1'
    },
    {
        name: <Dropdown id="dropdown2" />,
        type: <span className='fileSpan'>וואטסאפ</span>,
        srNo: '.2'
    },
    {
        name: <Dropdown id="dropdown3" />,
        type: <span className='fileSpan'>אתר אינטרנט</span>,
        srNo: '.3'
    }
]


const column = [
    {
        name: <span className='categoryText'>קטגוריה</span>,
        selector: row => row.name
    },
    {
        name: <span className='studiesText'>קישורים</span>,
        selector: row => row.type
    },
    {
        name: <span className='seriolText'>לא.</span>,
        selector: row => row.srNo
    }
]


export { column, data };