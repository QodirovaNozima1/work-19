const navbar = document.querySelector(".navbar__collection")

function toggleShow (){
    navbar.classList.toggle("show")
}





{
    //case1
    function weekDay(n) {
        alert("1 dan 7 gacha butun sonlar kiritilgan. Kiritilgan sonlarga mos ravishda hafta kunlarini soz'da ifodalovchi programma tuzlsin")
        switch (n) {
            case 1:
                return `Dushanba`
            case 2:
                return `Seshanba`
            case 3:
                return `Chorshanba`
            case 4:
                return `Payshanba`
            case 5:
                return `Juma`
            case 6:
                return `Shanba`
            case 7:
                return `Yakshanba`
            default:
                return `bunday kun mavzud emas`
        }
    }
    // console.log( weekDay(1) );
}

{
    // case2
    function result(n) {
        switch (n) {
            case 1:
                return `${1} - juda yomon`
            case 2:
                return `${2} - qoniqarsiz`
            case 3:
                return `${3} - qoniqarli`
            case 4:
                return `${4} - yaxshi`
            case 5:
                return `${5} - a'lo`
            default:
                return xato;
        }
    }
    // console.log( result(0) );   
}
{
    //case 3
    function monthSeaon(n) {
        // alert("Oy raqami berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin.")
        switch (n) {
            case 1:
                return `birinchi oy - Qish`
            case 2:
            case 12:
            return `Qish`
            case 3:
            case 4:
            case 5:
            return `Bahor`
            case 6:
            case 7:
            case 8:
            return `Yoz`
            case 9:
            case 10:
            case 11:
            return `Kuz`
            default:
                return `bunday oy mavjud emas`
        }  
    }
    // console.log( monthSeaon(0) );
    // console.log( monthSeaon(1) );
    // console.log( monthSeaon(2) );
}




{
    //case 4
    function monthDay(a) {
        // alert("Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi dastur tuzing.")
        switch (a) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                 return `${a} - oyda 31 kun bor` 
            case 2:
                return `${a} - oyda 28 kun bor (4 yilda bir 29 kun bo'ladi)`   
            case 4:
            case 6:
            case 9:
            case 11:
                return `${a} oyda 30 kun bor`
            default:
                return  `bunday oy mavjud emas`
        }
    }
    
    // console.log( monthDay(0) );
    // console.log( monthDay(1) );
}

{
    //case5
    function number(a, b, amal) {
        // alert("a va b haqiqiy va amal butun soni berilgan. a va b sonlari ustida arifmetik amallar bajaruvchi programma tuzilsin. amal quyidagi qiymatlarni qabul qiladi: \n 1 - qo'shish, 2 - aiyirish, 3 - bo'lish, 4 - ko'paytirish")
    
        let bPlus = "qo'shish"
        let bMinus = "aiyirish"
        let bBoluv = "bo'lish"
        let bKopaytiruv = "ko'paytirish"
        switch (a, b, amal) {
            case 1:
            return `a + b`
            case 2:
            return `a - b`
            case 3:
                if (b !== 0) {
                    return `a / b`               
                }else{
                    return `0 ga bo'lib bo'lmaydi`
                }
            case 4:
            return `a * b`
            default:
                return `bunday amal yo'q`
        }
    }
    
    // console.log( `Natija: ${number (2, 1, 1)}. Kiritlgan sonlar a = ${2} b = ${1}. kiritilgan amal = ${1} - qo'shish`  )
    // console.log( `Natija: ${number (8, 3, 4)}. Kiritlgan sonlar a = ${8} b = ${3}. kiritilgan amal = ${4} - ko'paytirish`  );
    // console.log( `Kiritlgan sonlar a = ${8} b = ${3}. kiritilgan amal = ${0} - c${number (8, 3, 0)}` );
}



{
    //case6
    function metr( m, length) {
        // alert("uzunlik qiymatlari quyidagicha berilgan. 1 - detsimetr, 2 - kilometr, 3 - metr, 4 -  millimetr, 5 - santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda ) va shu birlikdagi kesma uzunligini berilgan ( haqiqiy son ). Kesmaning uzunligini toping.")
    
        switch (length) {
            case 1:
                return  `Natija: ${ m * 0.1} metr. Kiritilgan qiymat = ${ m } dm`   
            case 2:
                return  `Natija: ${ m * 1_000} metr. Kiritilgan qiymat = ${ m } km`
            case 3:
                return  `Natija: ${ m } metr. Kiritilgan qiymat = ${ m } m`
            case 4:
                return  `Natija: ${ m * 0.001} metr. Kiritilgan qiymat = ${ m } mm`
            case 5:
                return  `Natija: ${ m * 0.01} metr. Kiritilgan qiymat = ${ m } sm`
            default:
                return `Noto'g'ri birlik soni kiritildi. Iltimos 1 - 5 gacha bo'lgan birlikni tanlang.`
        }
    }
    // console.log( metr(9, 1) );
    // console.log( metr(7, 2) );
}

{
    //case7
    function massa( kg, weight ) {
        // alert("Og'irlik birliklari quyidagi tartibda berilgan. 1 - kilogramm, 2- milligramm, 3 - gramm, 4 - tonna, 5 - sentner. Uzunlik birligini bildirtuvchi soni berilgan va shu birlikdagi og'irlik qiymati berilgan. Og'irlikni kilogramda ifodalovchi programma tuzilsin ")
        switch ( weight ) {
            case 1:
                return `Natija: ${ kg } kg. Kiritilgan qiymat = ${ kg } kg`
            case 2:
                return "Natija: ${ kg * 0.000_001 } kg. Kiritilgan qiymat = ${ kg } mg"
            case 3:
                return "Natija: ${ kg * 0.001 } kg. Kiritilgan qiymat = ${ kg } g"
            case 4:
                return "Natija: ${ kg * 1000 } kg. Kiritilgan qiymat = ${ kg } t"
            case 5:
                return "Natija: ${ kg * 100 } kg. Kiritilgan qiymat = ${ kg } st"
            default:
                return "Noto'g'ri birlik soni kiritildi. Iltimos 1 dan 5 gacha son kiriting"
        }
    }
    
    // console.log( massa(3, 1) );
    // console.log( massa(6, 2) );
    // console.log( massa(2, 3) );
}

{
    //case8 
    function yil(year){
                return`(year % 4 === 0 &&  year % 100 !== 0) || year % 400 === 0;`
            }
            function andyil(year){
                return `yil(year) ? 366 : 365;`
            }
            // console.log(andyil(2024));
        
}
{
    //case9
    function yil(year, moon) {
                let sum;
                switch (moon) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        sum = 31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        sum = 30;
                        break;
                    case 2:
                        `sum = isLeapyear(year) ? 29 : 28;`
                        break;
                    default:
                        `sum = "bunday javob yoq";`
                }
                return sum
            }
            // console.log(yil(2023, 3));
        
}

{
    //caes10
    function robot(commands) {
                let sum = [0, 0];
                let andsum = 0; 
        
                for (let command of commands) {
                    switch (command) {
                        case 's':
                            sum[1]++;
                            break;
                        case 'j':
                            sum[1]--;
                            break;
                        case 'q':
                            sum[0]++;
                            break;
                        case 'g':
                            sum[0]--;
                            break;
                        case '1':
                            andsum = (andsum + 3) % 4;
                            break;
                        case '2':
                            andsum = (andsum + 1) % 4;
                            break;
                        case '0':
                            if (andsum === 0) sum[1]++;
                            else if (andsum === 1) sum[0]++;
                            else if (andsum === 2) sum[1]--;
                            else if (andsum === 3) sum[0]--;
                            break;
                    }
                }
                return sum;
            }
            // console.log(robot(['s', 's', '2', 'q', '0']));
}



// For


{
    // for1
    function number( k, n ) {
        if ( n > 0) {
            for (let i = 0; i < n; i++) {
            console.log(k);            
            }       
        } else {
            return `n soni musbat bo'lishi kerak`
        }
    }
    
    // console.log( number(7, 5) );
}

{
    // for2
    function numbers(a, b) {
        let sum = 0
        if ( a < b) {
            for (let i = a; i <= b; i++) {
                console.log(i);          
            }
        } else {
            return `a soni b sonidan kichik bo'lishi kerak`
        }
        console.log(b - a + 1);
    }
    
    // console.log( numbers(6, 2 ) );
}


{
    // for3
    function numbers( a, b ) {
        if ( a < b ) {
            for (let i = b -= 1; i > a; i--) {
                console.log(i);            
            }
        } else {
            return `a soni b dan kichik bo'lishi kerak`
        }
        console.log( b - a );
    }
    
    // console.log( numbers(4, 2) );
}

{
    // for4   
        for (let i = 1; i <= 10; i++) {
            console.log(`prise * i`);        
        }
    
    // console.log( chocolate(100 ) );
}

{
    // for5
    function chocolate(prise) {
        for (let i = 0; i < 1; i += 0.1) {
            console.log( i * prise);        
        }   
    }
    // console.log( chocolate(10000) );
}

{
    // for6
    function chocolate( prise ) {
        for (let i = 1; i <= 2; i += 0.2) {
            console.log( i * prise);        
        }
    }
    // console.log( chocolate(1000) );
}

{
    // for7
    function number( a, b ) {
        let sum = 0
        if ( a < b ) {
            for (let i = a; i < b; i++) {
                sum = sum + i            
            }
        } else {
            return `a soni b sonidan kichik bo'lishi kerak`
        }
        console.log(sum);
    }
    // console.log( number( 7, 3 ) );
}

{
    // for8
    function number( a, b ) {
        let sum = 1
        if ( a < b) {
            for (let i = a; i < b; i++) {
                sum = sum * i            
            }
        } else {
            return `a soni b sonidan kichik bo'lishi kerak`
        }
        console.log(`${a} dan ${b} gacha bo'lgan sonlar ko'paytmasi ${sum} ga teng`);
    }
    
    // console.log( number(1, 6) );
}

{
    // for9
    function numbers( a, b) {
        let sum = 0
        if ( a < b) {
            for (let i = a; i < b; i++) {
                sum = sum + (i * i)            
            }
        } else {
            return `a soni b sonidan kichik bo'lishi kerak`
        }
        console.log(`${a} dan ${b} gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisi =  ${sum}`);
    }
    // console.log( numbers(4, 8) );
}

{
    // for10
    function number(n) {
        let sum = 0
        if ( n > 0 ) {
            for (let i = 1; i <= n; i++) {
                sum = i/n + sum
            }
        } else {
            return `n soni 0 dan kichik bo'lishi mumkin emas`
        }
        console.log(sum);
    }
    // console.log( number(2) );
}


{
    // for11
    function number( n ) {
        let sum = 0
        if ( n > 0) {
            for (let i = 0; i < n; i++) {
                sum = sum + ( ( i + n ) * ( i + n ))            
            }
        } else {
            return `n soni 0 dan katta bo'lishi kerak`
        }
        console.log(`Javob: ${sum}`);
    }
    
    // console.log( number(4) );
}

{
    // for12
    function number(n) {
        let result = 1
        if ( n > 0 ) {
            for (let i = 1.1; i < n; i += 0.1) {
                result = result * i            
            }
        } else {
            return "n soni 0 dan katta bo'lishi kerak"
        }
        return "Javob: ${result}"
    }
    // console.log( number (6) );
}

{
    // for13
    function number( n ) {
        let result = 0
        if ( n > 0 ) {
            for (let i = 1.1; i < n; i += 0.1) {
                result = result + i            
            }
        } else {
            return `n soni 0 dan katta bo'lishi kerak`
        }
        console.log( result );
    }
    
    // console.log( number ( 7 ) );
}