import React from 'react';
import '../assets/css/SidebarComp.css'

class SidebarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="sidebar d-flex flex-column justify-content-between">
                <div>
                    <div className="navbar-button m-auto">
                        <img src="https://play.grafana.org/public/img/grafana_icon.svg" className="img-icon" />
                    </div>
                </div>
                <div>
                    <div className="navbar-button m-auto" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="css-sr6nr" >
                            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                            </path>
                        </svg>
                    </div>
                    <div className="navbar-button m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="css-sr6nr" >
                            <path d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z"></path>
                        </svg>
                    </div>
                    <div className="navbar-button m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="css-sr6nr">
                            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,17.93V19a1,1,0,0,0-2,0v.93A8,8,0,0,1,4.07,13H5a1,1,0,0,0,0-2H4.07A8,8,0,0,1,11,4.07V5a1,1,0,0,0,2,0V4.07A8,8,0,0,1,19.93,11H19a1,1,0,0,0,0,2h.93A8,8,0,0,1,13,19.93ZM15.14,7.55l-5,2.12a1,1,0,0,0-.52.52l-2.12,5a1,1,0,0,0,.21,1.1,1,1,0,0,0,.7.3.93.93,0,0,0,.4-.09l5-2.12a1,1,0,0,0,.52-.52l2.12-5a1,1,0,0,0-1.31-1.31Zm-2.49,5.1-2.28,1,1-2.28,2.28-1Z" ></path>
                        </svg>
                    </div>
                    <div className="navbar-button m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24" class="css-sr6nr">
                            <path d="M18,13.18V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v3.18A3,3,0,0,0,4,16v2a1,1,0,0,0,1,1H8.14a4,4,0,0,0,7.72,0H19a1,1,0,0,0,1-1V16A3,3,0,0,0,18,13.18ZM8,10a4,4,0,0,1,8,0v3H8Zm4,10a2,2,0,0,1-1.72-1h3.44A2,2,0,0,1,12,20Zm6-3H6V16a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" ></path>
                        </svg>
                    </div>
                    <div className="navbar-button m-auto">
                        <img src="https://play.grafana.org/public/plugins/grafana-alerting-ui-app/img/logo-alerting-ui.svg" alt="Grafana Cloud Alerting logo" className="img-icon" />
                    </div>
                    <div className="navbar-button m-auto">
                        <img src="https://play.grafana.org/public/plugins/grafana-ml-app/assets/logo.svg" className="img-icon" />
                    </div>
                    <div className="navbar-button m-auto">
                        <img src="https://play.grafana.org/public/plugins/grafana-synthetic-monitoring-app/img/logo.svg" className="img-icon" />
                    </div>
                </div>
                <div>
                    <div className="navbar-button m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="css-sr6nr"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path>
                        </svg>
                    </div>
                    <div className="navbar-button m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="css-sr6nr"><path d="M11.29,15.29a1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2.84.84,0,0,0,.08.38.9.9,0,0,0,.54.54.94.94,0,0,0,.76,0,.9.9,0,0,0,.54-.54A1,1,0,0,0,13,16a1,1,0,0,0-.29-.71A1,1,0,0,0,11.29,15.29ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,7A3,3,0,0,0,9.4,8.5a1,1,0,1,0,1.73,1A1,1,0,0,1,12,9a1,1,0,0,1,0,2,1,1,0,0,0-1,1v1a1,1,0,0,0,2,0v-.18A3,3,0,0,0,12,7Z"></path></svg>
                    </div>
                </div>
            </div>
        );
    }
}
export default SidebarComp;