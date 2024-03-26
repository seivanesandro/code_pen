import React, {
    useEffect,
    useState
} from 'react';
//import PropTypes from 'prop-types'
import logo from '../assets/logo-removebg.png';
import styled from 'styled-components';
import { devices } from '../utils/constantes';
import useLocalStorage from '../storage';

const WrapperContainer = styled.div`
    position: relative;
`;

const HeaderContainer = styled.header`
    background: #333;
    color: #fafafa;
    height: 21vh;
    display: flex;
    justify-content: space-between;
`;
const ImgStyle = styled.img`
    margin: 0 0 0 6rem;
    padding: 0.5rem 0 0.5rem 0;
    position: absolute;
    height: 20vh;
    width: 15vh;
    object-fit: cover;
`;

const InputCoverContainer = styled.div`
    background: #333;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    height: 50vh;
    padding: 3rem 1.5rem 3rem 1.5rem;

    @media only screen and (${devices.mobileG}) {
        flex-direction: column;
        align-items: center;
        height: 116vh;
        max-width: 100%;
    }
    @media only screen and (${devices.mobileM}) {
        flex-direction: column;
        align-items: center;
        height: 116vh;
        max-width: 100%;
    }
    @media only screen and (${devices.mobileP}) {
        flex-direction: column;
        align-items: center;
        height: 116vh;
        max-width: 100%;
    }
`;

const TextArea = styled.textarea`
    background: #282828;
    color: rgb(209, 238, 246);
    font-weight: 600;
    border: 1px solid rgb(0, 109, 136);
    border-radius: 0.5rem;
    width: 30%;
    padding: 2rem;
    &::selection {
        background: purple;
        color: rgb(209, 238, 246);
    }

    &:hover {
        border: 1px solid #fafafa;
    }

    &:active {
        border: 1px solid #fafafa !important;
    }

    @media only screen and (${devices.tablet}) {
        width: 50%;
        height: 94%;
    }
    @media only screen and (${devices.mobileG}) {
        width: 86%;
        height: 50%;
    }
    @media only screen and (${devices.mobileM}) {
        width: 86%;
        height: 50%;
    }
    @media only screen and (${devices.mobileP}) {
        width: 86%;
        height: 50%;
    }
`;

const OutputContainer = styled.div`
    display: flex;
    max-height: 80%;
    height: 50vh;
`;

const Editor = props => {
    const [html, setHtml] = useLocalStorage(
        'html',
        ''
    );
    const [css, setCss] = useLocalStorage(
        'css',
        ''
    );
    const [js, setJs] = useLocalStorage('js', '');
    const [codepenCode, setCodepenCode] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCodepenCode(
                `
            <html>
                <style>${css}</style>
                <body>${html}</body>
                <script>${js}</script>
            </html>
            `
            );
        }, 200);
        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <>
            <WrapperContainer className="wrapper">
                <HeaderContainer className="header">
                    <ImgStyle
                        src={logo}
                        alt="thumbnail"
                        className="logo-img"
                    />
                </HeaderContainer>
                <InputCoverContainer className="input-cover">
                    <TextArea
                        value={html}
                        type="text"
                        placeholder="Html"
                        activeStyle={{
                            border: '0.1em solid rgb(203, 245, 255)'
                        }}
                        onChange={e => {
                            setHtml(
                                e.target.value
                            );
                        }}
                    />

                    <TextArea
                        value={css}
                        type="text"
                        placeholder="Css"
                        onChange={e => {
                            setCss(
                                e.target.value
                            );
                        }}
                    />

                    <TextArea
                        value={js}
                        type="text"
                        placeholder="Js"
                        onChange={e => {
                            setJs(e.target.value);
                        }}
                    />
                </InputCoverContainer>
                <OutputContainer className="output">
                    <iframe
                        srcDoc={codepenCode}
                        title="output"
                        sandbox="allow-scripts"
                        width="100%"
                        height="100%"
                    />
                </OutputContainer>
            </WrapperContainer>
        </>
    );
};

//Editor.propTypes = {}

export default Editor;
