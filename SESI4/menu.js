import { perhitungan } from './rumus.js';
import readline from 'readline';

const inputanUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askInput() {
    inputanUser.question('Please input your first number: ', digit1 => {
        inputanUser.question('Please input your second number: ', digit2 => {
            inputanUser.question('Input your Marking ( [+] [-] [/] [*]): ', tanda => {
                try {
                    const angka1 = parseFloat(digit1);
                    const angka2 = parseFloat(digit2);

                    // Validasi inputan hanya boleh numeric
                    if (isNaN(angka1) || isNaN(angka2)) {
                        throw new Error('Please input with numeric type!');
                    }

                    // Panggilan rumus perhitungan
                    const hasil = perhitungan(angka1, angka2, tanda);

                    // // Validasi simbol harus benar
                    if (hasil === undefined || hasil === null) {
                        throw new Error('Operator not valid! Please use the correct operator [+] [-] [/] [*] ');
                    }

                    console.log(`Result: ${hasil}`);
                    inputanUser.close();

                } catch (error) {
                    console.error(`Error: ${error.message}`);
                    console.log('Please try again...');
                    askInput();
                }
            });
        });
    });
}

askInput();