import React from 'react';

function MemeGeneratorComponent({ headerText, footerText, randImgUrl, handleOnSubmit, handleOnChange }) {

    return (
        <div>
            <form className="meme-form" onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    name="headerText"
                    placeholder="Header Text"
                    onChange={handleOnChange}
                    value={headerText}
                />
                <input
                    type="text"
                    name="footerText"
                    placeholder="Footer Text"
                    value={footerText}
                    onChange={handleOnChange}
                />

                <button>generate</button>
                {/* <button onClick={this.handleClick}>Gen2</button> */}

            </form>
            <div className="meme">
                <img src={randImgUrl}
                    alt="no pic! dont panic :)"
                    style={{ width: 800, height: 300 }} />
                <h2 className="top">{headerText}</h2>
                <h2 className="bottom">{footerText}</h2>
            </div>
        </div>

    )
}


export default MemeGeneratorComponent;