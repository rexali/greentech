import React, { memo } from 'react'
import { useMediaQuery } from '../hooks/MediaQuery';
import '../App.css';

const FloatingPoint = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    // const isPortrait = useMediaQuery('(orientation:portrait)');

    const styles = {
        emailLink: {
            position: 'fixed',
            bottom: 0,
            right: 0,
            textDecoration: 'none',
            color: 'white',
            backgroundColor: '#9933cc',
            display: 'flex ',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 14,
            width: 50,
            height: 50,
            borderRadius: 25,
            padding: 2,
            margin: 10,
            zIndex: 10,
        }
    }
    return (
        <div style={{ display: isDesktop ? 'none' : '' }}>
            <a
                href="mailto:momohasalihu@gmail.com.com"
                title="Send E-Mail"
                style={styles.emailLink}
            >Email</a>
        </div>
    );
};

export default memo(FloatingPoint);