import {useState} from 'react';

import TabButtons from 'components/tabs/TabButtons';
import TabContent from 'components/tabs/TabContent';

import './Tabs.css';

const Tabs=()=>{
    const [selectTab,setSelectTab]=useState("1");

    const clickHandler=(tabId)=>{
        setSelectTab(tabId);
    };

    return (
        <div className="tabs">
            <TabButtons selectTab={selectTab} clickHandler={clickHandler} />
            <TabContent selectTab={selectTab} />
        </div>
    );
}

export default Tabs;