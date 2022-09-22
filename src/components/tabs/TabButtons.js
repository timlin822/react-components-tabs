import TABS_DATA from 'data/TabsData';

import './Tabs.css';

const TabButtons=({selectTab,clickHandler})=>{
    return (
        <>
            {TABS_DATA.map(tab=>(
                <button key={tab.id} className={selectTab===tab.id?"btn-tab btn-tab-active":"btn-tab"} onClick={()=>clickHandler(tab.id)}>{tab.title}</button>
            ))}
        </>
    );
}

export default TabButtons;