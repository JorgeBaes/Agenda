/*
cd C:\Users\User\Desktop\programacoes_em_javascript\agendaAppfull
node server.js
*/
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// const dd = require('./dbDealer.js')
/*
dd.isEqual(value, other) 
dd.insertDB(name, value)
dd.pushIntoArray(arrayName)
dd.deleteFromArray_Index(arrayName, index, count = 1)
dd.deleteFromArray_Item(arrayName, item)
dd.changeItem(itemName, func)
dd.value(name)
*/


function value (name) {
    return db.get(name).value();
}
const isEqual = function (value, other) {
    /*
    Função que verifica se um objeto ou array é igual a outro objeto ou array
    */
    var type = Object.prototype.toString.call(value);
    if (type !== Object.prototype.toString.call(other)) return false;
    if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;
    var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
    var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;
    var compare = function (item1, item2) {
        var itemType = Object.prototype.toString.call(item1);
        if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
            if (!isEqual(item1, item2)) return false;
        }
        else {
            if (itemType !== Object.prototype.toString.call(item2)) return false;
            if (itemType === '[object Function]') {
                if (item1.toString() !== item2.toString()) return false;
            } else {
                if (item1 !== item2) return false;
            }
        }
    };
    if (type === '[object Array]') {
        for (var i = 0; i < valueLen; i++) {
            if (compare(value[i], other[i]) === false) return false;
        }
    } else {
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                if (compare(value[key], other[key]) === false) return false;
            }
        }
    }
    return true;

}
const insertDB = (name, value) => {
    /*
    insertDB ou redefineItem é uma função que insere ou redefine um item no banco de dados,
    se ele já estiver inserido será redefinido. 
    O primeiro parâmetro é o nome do item, e o segundo o valor o qual será atribuido.
    **Valores undifined e null não podem ser atribuidos
    */
    if (value == undefined || value == null) {
        console.error(`Propriety value can't be null or undifined`)
        return
    }
    if (typeof name != typeof '') {
        console.error('Propriety name must be String type')
        return
    }
    db.set(name, value)
        .write()
}
const redefineItem = insertDB
function pushIntoArray(arrayName) {
    /*
    pushIntoArray recebe um argumento obrigatório e quantos argumentos opicionais quiser.
    Esta função insere os argumentos, a partir do 2°, ao array indicado no primeiro argumento.
    O primeiro argumento é para o nome do array
    */
    const args = Array.from(pushIntoArray.arguments)
    if (typeof arrayName != typeof '') {
        console.error('Propriety arrayName must be String type')
        return
    }
    args.forEach((el, index) => {
        if (index != 0) {
            db.get(arrayName)
                .push(el)
                .write()
        }
    })

}
function deleteFromArray_Index(arrayName, index, count = 1) {
    /*
    deleteFromArray_Index é uma função que deleta items do array pelo index.
    O primeiro argumento é o nome do array
    O segundo argumento é o index a ser deletado
    O terceiro argumento é a contagem de elementos a serem deletados: default = 1
    */
    if (typeof arrayName != typeof '') {
        console.error('Propriety arrayName must be String type')
        return
    }
    let array = db
        .get(arrayName)
        .value();

    array.splice(index, count);

    db.get(arrayName)
        .assign(array)
        .write();
}
function deleteFromArray_Item(arrayName, item) {
    /*
    deleteFromArray_Item é uma função que deleta um item do array pelo próprio item.
    O primeiro argumento é o nome do array
    O segundo argumento é o item a ser deletado
    **Este método suporta items do tipo objeto e array
    */
    if (typeof arrayName != typeof '') {
        console.error('Propriety arrayName must be String type')
        return
    }
    let array = db
        .get(arrayName)
        .value();
    array.forEach((el, index) => {
        if (isEqual(item, el) || el === item) {
            array.splice(index, 1)
        }
    })
    db.get(arrayName)
        .assign(array)
        .write();
}
function changeItem(itemName, func = (item) => { }) {
    /*
    changeItem é uma função que muda um item na db pelo seu nome.
    O primeiro argumento é o nome do item
    O segundo é uma função que recebe um argumento item que é o item a ser alterado,
    e esta função é executada e o item é modificado de acordo com ela.
    **Esta função não requer return
    */
    if (typeof itemName != typeof '') {
        console.error('Propriety itemName must be String type')
        return
    }
    if (typeof func != typeof function () { }) {
        console.error('Propriety func must be a function with one argument')
        return
    }
    let item = db
        .get(itemName)
        .value();
    func(item)
    redefineItem(itemName, item)
}
const getDB = () => db.value()

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})
server.listen(3000);
//process.env.PORT || 3000
console.log('')
console.log('')
console.log(' - Server listening on port 3000')
console.log('')
console.log(' - As long as you leave this window open the app will be listened on http://localhost:3000/')
console.log('')
console.log(' - To stop the aplication you must close this window')





io.sockets.on('connection', function (socket) {
    // console.log('Client connected... ' + socket.id);   

    io.emit('updateColor', value('background_color'))
    io.emit('updateColorChecked', value('enableColorChecked'))
    io.emit('updateSubjects', value('subjects'))
    setTimeout( () => {
        io.emit('updateWeekCalendar', value('week_calendar'))
    },100)
    
    socket.on('updateEnableColorOnSub', newBool => {
        insertDB('enableColorChecked', newBool)
        io.emit('enableColorCheckedUpdate', newBool)
    })

    socket.on('colorChange', newColor => {
        insertDB('background_color',newColor)
        io.emit('updateColor', value('background_color'))
    })

    socket.on('addWeekRow', newRow => {
        pushIntoArray("week_calendar", newRow)
        io.emit('updateWeekCalendar', value('week_calendar'))
        io.emit('updateSubjects', value('subjects'))
    })
   
    socket.on('createSubject', newSubject => {
        pushIntoArray("subjects", newSubject)
        io.emit('updateSubjects', value('subjects'))
    })

    socket.on('deleteRow', id => {
        let rows = db
            .get('week_calendar')
            .value();
        rows.splice(rows.findIndex(el => el.id === id), 1);
        db.get('week_calendar')
            .assign(rows)
            .write();
        io.emit('updateWeekCalendar', value('week_calendar'))
        io.emit('updateSubjects', value('subjects'))
    })

    socket.on('deleteSub', subName => {
        let subs = db
            .get('subjects')
            .value();
        subs.splice(subs.findIndex(el => el.name === subName), 1);
        db.get('subjects')
            .assign(subs)
            .write();


        let rows = db
            .get('week_calendar')
            .value();
        rows.forEach( row => {
            for(let i = 1; i <= 7; i++){
                const string = "matDay"+i
                if (row[string] === subName){
                    row[string] = "" 
                }
            }
        })
        db.get('week_calendar')
            .assign(rows)
            .write();
        io.emit('updateSubjects', value('subjects'))
        io.emit('updateWeekCalendar', value('week_calendar'))
    })

    socket.on('updateRows_edit', weekCalendar => {
        db.get('week_calendar')
            .assign(weekCalendar)
            .write();

        io.emit('updateWeekCalendar', value('week_calendar'))
        io.emit('updateSubjects', value('subjects'))
    })

    //////

    socket.on('materiaColorChange', ({ newColor, hashCode }) => {        
        let subs = db
            .get('subjects')
            .value();
        const sub = subs[subs.findIndex(el => el.id === hashCode)]
        sub.color = newColor
        db.get('subjects')
            .assign(subs)
            .write();
        io.emit('updateSubjects', value('subjects'))
    })

    socket.on('newTarefa', ({ newTarefa, hashCode }) =>{
        let subs = db
            .get('subjects')
            .value();
        const sub = subs[subs.findIndex(el => el.id === hashCode)]
        sub.activities.push(newTarefa)
        db.get('subjects')
            .assign(subs)
            .write();
        io.emit('updateSubjects', value('subjects'))
    })

    socket.on('checkUncheck', ({ id, hashCode }) => {
        let subs = db
            .get('subjects')
            .value();
        const sub = subs[subs.findIndex(el => el.id === hashCode)]
        const index = sub.activities.findIndex(el => el.id == id)
        sub.activities[index].done = !sub.activities[index].done
        db.get('subjects')
            .assign(subs)
            .write();
        io.emit('updateSubjects', value('subjects'))
    })

    socket.on('deleteTarefa', ({ id , hashCode }) => {
        let subs = db
            .get('subjects')
            .value();
        const sub = subs[subs.findIndex(el => el.id === hashCode)]
        const index = sub.activities.findIndex(el => el.id == id)
        sub.activities.splice(index,1)
        db.get('subjects')
            .assign(subs)
            .write();
        io.emit('updateSubjects', value('subjects'))
    })
    // socket.on('disconnect', function () {

    // })
});


