import { json } from '@remix-run/server-runtime';
import icon128 from '../assets/hydrogen-128.png';
import icon144 from '../assets/hydrogen-144.png';
import icon152 from '../assets/hydrogen-152.png';
import icon192 from '../assets/hydrogen-192.png';
import icon256 from '../assets/hydrogen-256.png';
import icon512 from '../assets/hydrogen-512.png';

//import { json } from '@remix-run/node';
export const loader = () => {
    return json({
        short_name: 'PWA',
        name: 'Remix PWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#d3d7dd',
        theme_color: '#c34138',
        icons: [{
            "src": icon128,
            "sizes": "128x128",
            "type": "image/png"
        }, {
            "src": icon144,
            "sizes": "144x144",
            "type": "image/png"
        }, {
            "src": icon152,
            "sizes": "152x152",
            "type": "image/png"
        }, {
            "src": icon192,
            "sizes": "192x192",
            "type": "image/png"
        }, {
            "src": icon256,
            "sizes": "256x256",
            "type": "image/png"
        }, {
            "src": icon512,
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
        }],  
    }, {
        headers: {
            'Cache-Control': 'public, max-age=1',
            'Content-Type': 'application/manifest+json',
        },
    });
};
