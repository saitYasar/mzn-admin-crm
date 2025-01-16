import { AppBar, TitlePortal } from 'react-admin';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';
import DistedavimLogo from '../logo';

const SettingsButton = () => (
    <IconButton color="inherit">
        <SettingsIcon />
    </IconButton>
);

export const MyAppBar = () => (
    <AppBar style={{
        background: 'linear-gradient(to right,rgb(157, 163, 74),rgb(254, 247, 37))',
        animation: 'gradientAnimation 1s infinite'
    }}>
        <TitlePortal />
        <div style={{ marginTop: "5px" }}>
            <DistedavimLogo colors="white" width={120} height={40} />
        </div>
        <SettingsButton />
    </AppBar>
);
