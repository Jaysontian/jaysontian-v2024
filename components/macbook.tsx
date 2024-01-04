'use client'
import { motion } from "framer-motion"
import Image from 'next/image'
import MacImg from '@/assets/macbook.png'
import Sticker from '@/components/sticker'

import stickerLogic from '@/assets/stickers/logic.png'
import stickerCoffee from '@/assets/stickers/coffee.png'
import stickerDog from '@/assets/stickers/dog.png'
import stickerToronto from '@/assets/stickers/toronto.png'
import stickerNotion from '@/assets/stickers/notion.png'
import stickerUcla from '@/assets/stickers/ucla.png'
import stickerCraft from '@/assets/stickers/craft.png'
import stickerVball from '@/assets/stickers/vball.png'
import stickerGithub from '@/assets/stickers/github.png'
import stickerSoundcloud from '@/assets/stickers/soundcloud.png'
import stickerLinkedin from '@/assets/stickers/linkedin.png'
import stickerMail from '@/assets/stickers/mail.png'

export default function Macbook() {
    return(
        <div className="max-w-[750px] h-[420px] bg-soft100 rounded-lg my-4 overflow-hidden">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className='max-w-[450px] h-2/3 m-auto py-12 hover:scale-[105%] transition'>
                <Image src={MacImg} alt='jaysons macbook' className="w-full h-auto"></Image>
                <Sticker src={stickerLogic} w={120} h={120} t={320} l={90} text='I use Logic to record, mix, and produce music + experimental soundscapes' />
                <Sticker src={stickerCoffee} w={80} h={80} t={430} l={200} text="I'm a coffee fanatic. Blue Bottle Coffee is where I get all my work done!" />
                <Sticker src={stickerDog} w={100} h={100} t={530} l={295} text="My dog Sylvester. The most hyperactive Border Collie to exist."  />
                <Sticker src={stickerToronto} w={160} h={160} t={660} l={-25} text='I was raised in the true north with the maples. Toronto is home!' />
                <Sticker src={stickerNotion} w={60} h={60} t={665} l={20} text='Notion lover and user – I love exploring productivity apps' />
                <Sticker src={stickerUcla} w={150} h={70} t={650} l={0} text='Go Bruins' />
                <Sticker src={stickerCraft} w={100} h={100} t={860} l={80} text='Craft is my favourite productivity app' />
                <Sticker src={stickerVball} w={80} h={80} t={850} l={160} text="6 years playing volleyball. I'm also a big tennis fan and skier" />
                <Sticker src={stickerGithub} w={100} h={120} t={1000} l={255} text='Click to see my Github' href='https://github.com/Jaysontian' />
                <Sticker src={stickerSoundcloud} w={80} h={80} t={1120} l={370} text='Click to listen to my Soundcloud' href='https://soundcloud.com/jaetz' />
                <Sticker src={stickerLinkedin} w={150} h={80} t={1050} l={285} text='Click to see my LinkedIn' href='https://www.linkedin.com/in/jaysontian/' />
                <Sticker src={stickerMail} w={50} h={50} t={1165} l={355} text="Click to copy my email to your clipboard jaysontian@g.ucla.edu" href='copyemail' />
            </motion.div>
        </div>
    )
}