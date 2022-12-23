import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

import MenuLink from "./components/MenuLink";

import FsLightboxEx from "./pages/FsLightboxEx";
import AosEx from "./pages/AosEx";
import Slider from "./pages/Slider";
import SweetAlert2Ex from "./pages/SweetAlert2Ex";

const App = memo(() => {
  return (
    <div>
      <h1>UI-Library</h1>
      <nav>
        <MenuLink to="/fs_lightbox">FsLightBox</MenuLink>
        <MenuLink to="/aos">AosEx</MenuLink>
        <MenuLink to="/slider">Slider</MenuLink>
        <MenuLink to="/sweetalert">SweetAlert2Ex</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/fs_lightbox" element={<FsLightboxEx />} />
        <Route path="/aos" element={<AosEx />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/sweetalert" element={<SweetAlert2Ex />} />
      </Routes>
    </div>
  );
});

export default App;
