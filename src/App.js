import React from 'react';
import Editor from './component/Editor';

function App() {
    return (
        <>
            <Editor />
            <div className="footer d-flex flex-column align-items-center justify-content-center border border-secondary border-opacity-50 py-5 ">
                <span className=" text-secondary text-opacity-50 mb-3">
                    copyrigths @ sandro seivane
                </span>
                <p>
                    <a href="http://jigsaw.w3.org/css-validator/check/referer">
                        <img
                            style={{
                                border: '0',
                                width: '88px',
                                height: '31px'
                            }}
                            src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
                            alt="Valid CSS!"
                        />
                    </a>
                </p>
            </div>
        </>
    );
}

export default App;
