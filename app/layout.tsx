import type { Metadata } from "next";
import Image from 'next/image'
import "./globals.css";
import Link from "next/link";
import {JetBrains_Mono} from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({subsets: ['latin']})


export const metadata: Metadata = {
  title: "BowlBird",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} crt`}>
      <div className="scanline"/>
        <div className='grid grid-cols-1 grid-flow-row w-full header'>
          <div className="flex justify-center">
             <Image 
                src='logo.svg'
                width='100'
                height='100'
                alt="system logo"
              />
            <div className="grid grid-cols-1">
              <p>Welcome to BowlBirdOS v1.0.0</p>
              <p>by Carson Miller</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link className='link text-center flex-auto' href="https://www.linkedin.com/in/carson-miller-295571253/" rel='noopener noreferrer' target='_blank' passHref>LinkedIn</Link>
            <Link className='link text-center flex-auto' href="https://drive.google.com/file/d/1Ybb_2QpkmsaQ9wy9z4rZo6Sed88w75oW/view?usp=sharing" rel='noopener noreferrer' target='_blank' passHref>Resume</Link>
            <Link className='link text-center flex-auto' href="https://github.com/BowlBird" rel='noopener noreferrer' target='_blank' passHref>GitHub</Link>
          </div>
        </div>
        {children}
        </body>
    </html>
  );
}
