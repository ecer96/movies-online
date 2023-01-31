import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_avu0rag', 'template_qsribxg', form.current, '0EhTH6mmb76lVn33D')
        .then((result) => {
            alert("Su Mensaje Se A Enviado Correctamente");
        }, (error) => {
            error("Hubo Un Error Porfavor Intentelo Nuevamente");
        });
    };


    return (
        <div className="">
            <h1 className="text-center font-Monse font-bold text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-10">
                Contact
            </h1>


        <div className="flex justify-center">

            <form className="bg-white flex justify-center align-middle mt-32 border border-color-slate-50  rounded-lg xsm:w-80 xsm:mt-10" ref={form} onSubmit={sendEmail}>
            <div className=" justify-center border border-amber-500 rounded-md w-96  p-10  shadow-lg shadow-slate-500">

                <label htmlFor="name" className="my-4 text-lg font-semibold">Name</label>
                <input
                    className="flex text-start  my-4 py-1 w-full  border-b-2 focus:border-amber-500 outline-none transition ease-in delay-150"
                    type={"text"}
                    placeholder="texto"
                    id="name"
                    name="user_name"
                ></input>

            <label htmlFor="subject" className="my-4 text-lg font-semibold ">Subject</label>
                <input
                    className="flex text-start  my-4 py-1 w-full  border-b-2 focus:border-amber-500 outline-none transition ease-in delay-150"
                    type={"text"}
                    placeholder="subject"
                    id="subject"
                    name="subject"
                ></input>

          
                <label htmlFor="user_email" className="text-lg font-semibold ">Email</label>
                <input
                    className="flex  my-4 w-full py-1  border-b-2 focus:border-amber-500 outline-none transition ease-in delay-150"
                    type={"email"}
                    placeholder="Email"
                    id="user_email"
                    name="user_email"
                ></input>

                <label htmlFor="message" className="my-4 text-lg font-semibold">Message</label>
                <textarea className="flex py-2 mt-4 w-full" type={"text"} id="message" name="message" />
                <input type={'submit'} value="Send" className="text-center px-5 py-2 border bg-blue-500 w-full hover:bg-blue-700 rounded-lg shadow mt-5"></input>
            </div>

       
            </form>
</div>
        </div>
    );
};
