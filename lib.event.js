import { EventEmitter } from "events";


const emitter = new EventEmitter();
emitter.on('send_email',(email_addres)=>{
    console.info('Email Berhasil dikirim Ke alamat '+email_addres);
})

function forgetPassword(){
    console.log('Start forget password Password Process');
    emitter.emit('send_email', 'mikhanaftali@gmail.com')
}
forgetPassword();