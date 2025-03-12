import { error } from 'console';
import {readFile,writeFile} from 'fs/promises';

async function extractFile() {
    try {
        const data = await readFile('data.txt','utf8')
        console.log('Isi filenya :',data)
    }catch(err){
        console.error('Error Membaca File:', err);
    }
}

async function writeToFile() {
    try{
        await writeFile('output.txt', 'Hello, Node.js');
        console.log('File Berhasil Di Tulis')
    }catch (err)  {
        console.error('Error Menulis File', err)
    }
    
}
extractFile();
writeToFile();