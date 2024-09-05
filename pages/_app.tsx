import { globalStyles } from "@/styles";
import { theme } from "@/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import '@fontsource/ibm-plex-sans-thai/400.css'
import '@fontsource/ibm-plex-sans-thai/500.css'
import '@fontsource/ibm-plex-sans-thai/600.css'
import '@fontsource/ibm-plex-sans-thai/700.css'

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
        {globalStyles}
        <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default App;