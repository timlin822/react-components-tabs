import TABS_DATA from 'data/TabsData';

import './Tabs.css';

const TabContent=({selectTab})=>{
    return (
        <>
            {TABS_DATA.map(tab=>(
                <div key={tab.id} className={selectTab===tab.id?"tab-content tab-content-active":"tab-content"}>{tab.content}</div>
            ))}
        </>
    );
}

export default TabContent;