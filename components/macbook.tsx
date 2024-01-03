
import Image from 'next/image'
import MacImg from '@/assets/macbook.png'

export default function Macbook(){
    return(
        <div className="max-w-[750px] h-[400px] bg-gray-100 rounded-lg">
            <Image src={MacImg} width={600} height={500} alt='jaysons macbook' className='m-auto'></Image>
        </div>
    )
}