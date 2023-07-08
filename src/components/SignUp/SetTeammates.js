import "./SetTeammates_style.css";
import { useNavigate } from "react-router-dom";
// react-icons
import { BiLink } from 'react-icons/bi';

function SetTeammates(){
    let navigate = useNavigate();
    
    const onClickMainPageMove = () => {
        navigate("/main");
    };

    return(
        <div className="set-mates-container">
            <h2>WORKBEE</h2>
            <div className="set-mates-inner">
                <p className="set-mates-title">Add your teammates</p>
                <p>To do so, start typing their company email</p>
                    <form className="set-mates-form">
                            <input
                                className="set-mates-input"
                                placeholder="Company email"
                                />
                            <input
                                className="set-mates-input"
                                placeholder="Company email"
                                />
                            <input
                                className="set-mates-input"
                                placeholder="Company email"
                                />
                            <div className="set-mates-form-inner">
                                <p className="set-mates-add-people">+ Invite more people</p>
                                <p className="set-mates-send-link">
                                    <BiLink style={{display:"inline-block",marginRight: 0, marginLeft: 'auto'}} size="20px"/>
                                     Send an invite link
                                </p>
                            </div>
                        <button onClick={onClickMainPageMove}>Start</button>
                    </form>
            </div>
        </div>
    );
}

export default SetTeammates;
