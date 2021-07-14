var book = {


    name : 'Javascript Fundamental',
    basic :'core concept',
    publisher : 'Ahsanul huq',
    year : 2020,
    print: function(){

        console.log(this.name, this.basic, this.publisher)
    }

}

book.shibu = 'adnan'

book.adnan = 20;



for (var props in book){


    console.log(props + ' = ' + book[props])
}