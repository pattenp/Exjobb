import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        margin: 0 2rem;
        padding: 0;
		height: 100vh;
		width: calc(100% - 2rem * 2);
        background-color: #0f172a;
		color: #f8fafc;
		font-family: Inter;
    }

    a {
        text-decoration: none;
        color: #f8fafc;
    }
`;