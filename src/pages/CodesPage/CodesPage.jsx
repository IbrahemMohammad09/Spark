import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';
import MainHomeTitle from '../../components/SharedComponents/MainHomeTitle/MainHomeTitle';
import MainButton from '../../components/SharedComponents/MainButton/MainButton';





const CodesPage = () => {
    const [codes ,setCodes] = useState([]);
    const data = [
        {
            "id": 1,
            "title": "CSS Cursor",
            "summary": "lakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lk",
            "picture": "/images/files_pics/iPhone_15_Pro_Max_Screen_Mockup.png",
            "file": "https://sparkeng.pythonanywhere.com/files/Dragon_Cursor_Effect.rar"
        },
        {
            "id": 2,
            "title": "CSS Cursor",
            "summary": "lakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lk",
            "picture": "/images/files_pics/iPhone_15_Pro_Max_Screen_Mockup.png",
            "file": "https://sparkeng.pythonanywhere.com/files/Dragon_Cursor_Effect.rar"
        },
        {
            "id": 3,
            "title": "CSS Cursor",
            "summary": "lakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lk",
            "picture": "/images/files_pics/iPhone_15_Pro_Max_Screen_Mockup.png",
            "file": "https://sparkeng.pythonanywhere.com/files/Dragon_Cursor_Effect.rar"
        },
        {
            "id": 4,
            "title": "CSS Cursor",
            "summary": "lakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lklakdn lan lakn alkn lkan lk",
            "picture": "/images/files_pics/iPhone_15_Pro_Max_Screen_Mockup.png",
            "file": "https://sparkeng.pythonanywhere.com/files/Dragon_Cursor_Effect.rar"
        },
    ]
    

    useEffect(()=>{
        axios.get("https://sparkeng.pythonanywhere.com/files/")
            .then((response)=>{
                const data = response.data.files
                setCodes (data);
            })
    },[]);

    


    return (
        <div className="mt-[100px]">
            <div className="flex flex-col items-center justify-center">
                <h1 className=" text-4xl text-gray-700 mb-4 text-center">
                    Explore a variety of free code samples and resources to kickstart your projects.
                </h1>
            </div>
            <div className="flex flex-col items-center mt-10">
                {data.map(item => (
                    <motion.div
                        key={item.id}
                        className="max-w-3xl w-full bg-white shadow-md rounded-lg overflow-hidden mb-4 flex"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: item.id * 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <img src={"https://sparkeng.pythonanywhere.com/"+item.picture} alt={item.title} className="w-1/3 h-auto object-cover" />
                        <div className="p-4 w-2/3">
                            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-gray-600 mt-2">{item.summary}</p>
                            {/* <MainButton title={"Download"} url={item.file} addStyle={"mx-auto mt-3"}/> */}
                            <a href={item.file} download className="mt-4 no-underline inline-block bg-blue-500 text-white text-center rounded-md px-4 py-2 hover:bg-blue-600 transition">
                                Download
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default CodesPage;