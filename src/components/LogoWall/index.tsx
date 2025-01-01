import LogoWall from './logoWall';
import reactbits from "../../assets/logos/reactbits-icon.svg";

const logoImgs = [
    { imgUrl: '/logos/express.svg', altText: 'Express.js' },
    { imgUrl: '/logos/mongodb.svg', altText: 'MongoDB' },
    { imgUrl: '/logos/react.svg', altText: 'React' },
    { imgUrl: '/logos/typescript.svg', altText: 'TypeScript' },
    { imgUrl: '/logos/tailwindcss.svg', altText: 'Tailwind CSS' },
    { imgUrl: '/logos/nodejs.svg', altText: 'Node.js' },
];

export function LogosDesktop() {
    return (
        <div 
            style={{ height: '640px', width: '90%', position: 'relative' }}>
            <LogoWall
                items={logoImgs}
                direction='vertical'
                pauseOnHover={false}
                size='clamp(8rem, 1rem + 1vmin, 25rem)'
                duration='60s'
                bgColor='#ffffff'
                bgAccentColor='#ffffff'
            />
        </div>
    )
}

export function LogosMobile() {
    return (
        <div 
            style={{ height: '60px', width: '100%', position: 'relative' }}>
            <LogoWall
                items={logoImgs}
                direction='horizontal'
                pauseOnHover={false}
                size='clamp(8rem, 1rem + 1vmin, 25rem)'
                duration='60s'
                bgColor='#ffffff'
                bgAccentColor='#ffffff'
            />
        </div>
    )
}

