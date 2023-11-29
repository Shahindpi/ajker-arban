import 'bootstrap/dist/css/bootstrap.min.css';
import Latest from '../common/footer/bulletins/Latest';
import Popular from '../common/footer/bulletins/Popular';

import { Tabs, Tab } from 'react-bootstrap';


export default function FilterTab(){
    return(
        <div className='sidebar-coentent bulletins'>
            <Tabs
                defaultActiveKey="latest"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
                >
                <Tab eventKey="latest" title="সর্বশেষ সংবাদ">
                    <Latest />
                </Tab>
                <Tab eventKey="profile" title="জনপ্রিয় সংবাদ">
                    <Popular />
                </Tab>
            </Tabs>
        </div>
    )
}