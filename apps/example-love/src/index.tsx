/* @refresh reload */
import "windi.css";
import { render } from "solid-js/web";

import App from "./App";
import Navigationbar from "./Navigationbar";
import Bottombar from "./Bottombar";
import Consent from "./Consent";
import Tpcr from './tpcr';
import Content from './Content';

render(
  () => <Navigationbar />,
  document.getElementById("navigation") as HTMLElement
);
render(
  () => <App />,
  document.getElementById("root") as HTMLElement
);
render(
  () => <Content />,
  document.getElementById('root') as HTMLElement
);
render(
  () => <Bottombar />,
  document.getElementById("bottombar") as HTMLElement
);
render(
  () => <Tpcr />,
  document.getElementById("ทรงพระเจริญ") as HTMLElement
);
render(
  () => <Consent />,
  document.getElementById("consent") as HTMLElement
);
