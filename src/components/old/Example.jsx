import React from 'react'
import macbook from '../../assets/image/MacbookAir(2022).png'
import { useEffect } from 'react'

const Example = () => {
  useEffect(() => {
    const footerClass = document.getElementsByClassName('embed_documentation_footer--documentationFooterLeft--171vH')
    console.log('footerClass', footerClass)
  });
  return (
    <div className="example">
      <h1>Example</h1>
      <iframe
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="800" height="720"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbI6Ry8pl6LuAx3iThVjh83%2Fdemo%3Fpage-id%3D0%253A1%26node-id%3D1%253A995%26viewport%3D1335%252C492%252C0.85%26scaling%3Dcontain%26starting-point-node-id%3D1%253A995%26hide-ui%3D1"
        allowFullScreen
      />
      {/*<iframe*/}
      {/*  style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="800" height="720"*/}
      {/*  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbI6Ry8pl6LuAx3iThVjh83%2Fdemo%3Fpage-id%3D0%253A1%26node-id%3D1%253A995%26viewport%3D1331%252C392%252C0.58%26scaling%3Dcontain%26starting-point-node-id%3D1%253A995%26hide-ui%3D1"*/}
      {/*  allowFullScreen*/}
      {/*></iframe>*/}
      {/*<iframe*/}
      {/*  style={{ border: '1px solid rgba(0, 0, 0, 0.1)', margin: '0 auto' }} width="800" height="640"*/}
      {/*  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbI6Ry8pl6LuAx3iThVjh83%2Fdemo%3Fpage-id%3D0%253A1%26node-id%3D1%253A1036%26viewport%3D981%252C513%252C0.36%26scaling%3Dcontain%26starting-point-node-id%3D1%253A995%26hide-ui%3D1"*/}
      {/*  allowFullScreen*/}
      {/*></iframe>*/}
      {/*<iframe*/}
      {/*  style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="100%" height="800px"*/}
      {/*  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fxes5ScstGdebq5PM7psOkW%2FMoloco-Website-%255BIn-Progress%255D%3Fpage-id%3D1042%253A9196%26node-id%3D1009%253A9039%26starting-point-node-id%3D1009%253A7670%26hide-ui%3D1"*/}
      {/*  // allowFullScreen*/}
      {/*/>*/}
    </div>
    // <div className="main-screen">
    //   <div className="main-info">
    //     <h1>Ayla Networks</h1>
    //     <p>“BlueApple is reliable, fast, and quality of work is always top-notch. Our expectations are high and BlueApple
    //       team nails it every single time.”</p>
    //     <span>Alla Oks, Sr. Director Marketing, Ayla Networks</span>
    //   </div>
    //   <div className="macbook-block">
    //     <img src={ macbook } alt="macbook" />
    //   </div>
    //   <div className="overview-block">
    //     <div className="overview-title">
    //       <h2>Overview</h2>
    //     </div>
    //     <div className="overview-info">
    //       <div>
    //         <h4>Client</h4>
    //         <p>Ayla Networks enables consumer brand manufacturers (OEMs) & Internet service providers (ISPs) to realize
    //           better business outcomes through AI & IoT.</p>
    //       </div>
    //       <div>
    //         <h4>Main Task</h4>
    //         <p>BlueApple led a corporate identity redesign project with the complete overhaul of website structure and visual design.</p>
    //       </div>
    //       <div>
    //         <h4>What We Did</h4>
    //         <ul>
    //           <li>Sitemap</li>
    //           <li>Scope Definition</li>
    //           <li className="desktop">Research</li>
    //           <li>Information Architecture</li>
    //           <li>Wireframing</li>
    //           <li>User Interface</li>
    //           <li>Usability Testing</li>
    //           <li>Infographics</li>
    //           <li>Marketing Materials</li>
    //           <li>Icon Package</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Example