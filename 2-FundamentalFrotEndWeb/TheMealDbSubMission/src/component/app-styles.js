import { LitElement, html, css } from 'lit-element';

export const sharedStyles = css`
        .table-area {
            background-image: url('../src/img/banner-bg.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
            z-index: 1;
            height: 80vh
        }
        .masthead {
            height: 25vh;
            min-height: 100px;
            background-image: url('../src/img/banner-bg.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            z-index: 1;
        }        
        .section-padding {
            padding: 38px 0;
        }
        .section-top2 span {
            color: #ffb606;
        }
         .section-top2  {
            color: #ff6347;
        }
        #transparent-navbar-guestnav {
            background-color: rgba(0, 0, 0, 0.85);
        }
        .nav { margin-bottom: 20px; }
        
        .filter-bar {
            padding: 0px 20px 10px 20px;
            background: #ffb606;
        }

`;
