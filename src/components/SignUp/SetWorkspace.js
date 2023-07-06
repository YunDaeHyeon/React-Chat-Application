import "./SetWorkspace_style.css";

function SetWorkspace(){

    const onClickSetWorkMove = () => {

    }

    return(
        <div className="set-work-container">
            <h2>WORKBEE</h2>
            <div className="set-work-inner">
                <p className="set-work-title">Set up your workspace</p>
                <p>Now, name your workspace and add teams</p>
                    <form className="set-work-form">
                            <input
                                style={{
                                    marginBottom: 20
                                }}
                                className="set-work-input"
                                placeholder="Company name"
                                />
                            <p className="set-work-subtitle">Add as many teams as you want</p>
                            <input
                                className="set-work-input"
                                placeholder="Marketing Team"
                                />
                            <input
                                className="set-work-input"
                                placeholder="Customer Experience Team"
                                />
                            <p className="set-work-add-item">+ Add team</p>
                        <button onClick={onClickSetWorkMove}>Continue</button>
                    </form>
            </div>
        </div>
    );
}

export default SetWorkspace;
