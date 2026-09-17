import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'Nova Capital — Invest With Clarity',description:'Premium investment platform interface'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
