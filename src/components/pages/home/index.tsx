import React from 'react';
import Panel from '../../common/panel';


function HomePage() {
    return (
        <div>
            <Panel
                title="Hello Mates!"
                descrip={<p className="size-40 mb-3 mt-4">i'm <span className="color-red">Arihant Pal</span>, a developer and Cybersecurity enthusiast</p>}
                remark="find out more about me!"
                btnString="start"
            />
        </div>
    );
}

export default HomePage;