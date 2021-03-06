const socket = io.connect('http://localhost:3000/');

const cancelSGV = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 507.2 507.2" style="enable-background:new 0 0 507.2 507.2; transform:scale(2.5);" xml:space="preserve" width="20px" heigth="20px">
<circle style="fill:#F15249;" cx="253.6" cy="253.6" r="253.6"/>
<path style="fill:#AD0E0E;" d="M147.2,368L284,504.8c115.2-13.6,206.4-104,220.8-219.2L367.2,148L147.2,368z"/>
<path style="fill:#FFFFFF;" d="M373.6,309.6c11.2,11.2,11.2,30.4,0,41.6l-22.4,22.4c-11.2,11.2-30.4,11.2-41.6,0l-176-176  c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L373.6,309.6z"/>
<path style="fill:#D6D6D6;" d="M280.8,216L216,280.8l93.6,92.8c11.2,11.2,30.4,11.2,41.6,0l23.2-23.2c11.2-11.2,11.2-30.4,0-41.6  L280.8,216z"/>
<path style="fill:#FFFFFF;" d="M309.6,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6L197.6,373.6  c-11.2,11.2-30.4,11.2-41.6,0l-22.4-22.4c-11.2-11.2-11.2-30.4,0-41.6L309.6,133.6z"/>
<g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>`
const checkSVG = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 507.2 507.2" style="enable-background:new 0 0 507.2 507.2; transform:scale(2.5);" xml:space="preserve" width="20px" heigth="20px">
<circle style="fill:#32BA7C;" cx="253.6" cy="253.6" r="253.6"/>
<path style="fill:#0AA06E;" d="M188.8,368l130.4,130.4c108-28.8,188-127.2,188-244.8c0-2.4,0-4.8,0-7.2L404.8,152L188.8,368z"/>
<g>
	<path style="fill:#FFFFFF;" d="M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8   c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L260,310.4z"/>
	<path style="fill:#FFFFFF;" d="M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2   c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6L348.8,133.6z"/>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>
`
const garbageSVG = `
<svg xmlns="http://www.w3.org/2000/svg" class="animateSVG" height="35px" width="35px" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<title>Deletar</title>
<g>
	<g>
		<path d="M436,60h-90V45c0-24.813-20.187-45-45-45h-90c-24.813,0-45,20.187-45,45v15H76c-24.813,0-45,20.187-45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693-17.594,44.815-40.926c0.004-0.043,0.008-0.086,0.011-0.129L449.817,150H466c8.284,0,15-6.716,15-15v-30    C481,80.187,460.813,60,436,60z M196,45c0-8.271,6.729-15,15-15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c-0.729,7.753-7.142,13.592-14.934,13.592H133.396c-7.792,0-14.204-5.839-14.934-13.592L92.284,150h327.432L393.537,468.408z     M451,120h-15H76H61v-15c0-8.271,6.729-15,15-15h105h150h105c8.271,0,15,6.729,15,15V120z"/>
	</g>
</g>
<g>
	<g>
		<path d="M256,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C271,186.716,264.284,180,256,180z"/>
	</g>
</g>
<g>
	<g>
		<path d="M346,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C361,186.716,354.284,180,346,180z"/>
	</g>
</g>
<g>
	<g>
		<path d="M166,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C181,186.716,174.284,180,166,180z"/>
	</g>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>/g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`
const editSVG = `
<svg xmlns="http://www.w3.org/2000/svg" class="animateSVG" height="35px" width="35px" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.873 477.873" style="enable-background:new 0 0 477.873 477.873; margin-right:-7px" xml:space="preserve">
<title>Editar</title>
<g>
	<g>
		<path d="M392.533,238.937c-9.426,0-17.067,7.641-17.067,17.067V426.67c0,9.426-7.641,17.067-17.067,17.067H51.2    c-9.426,0-17.067-7.641-17.067-17.067V85.337c0-9.426,7.641-17.067,17.067-17.067H256c9.426,0,17.067-7.641,17.067-17.067    S265.426,34.137,256,34.137H51.2C22.923,34.137,0,57.06,0,85.337V426.67c0,28.277,22.923,51.2,51.2,51.2h307.2    c28.277,0,51.2-22.923,51.2-51.2V256.003C409.6,246.578,401.959,238.937,392.533,238.937z"/>
	</g>
</g>
<g>
	<g>
		<path d="M458.742,19.142c-12.254-12.256-28.875-19.14-46.206-19.138c-17.341-0.05-33.979,6.846-46.199,19.149L141.534,243.937    c-1.865,1.879-3.272,4.163-4.113,6.673l-34.133,102.4c-2.979,8.943,1.856,18.607,10.799,21.585    c1.735,0.578,3.552,0.873,5.38,0.875c1.832-0.003,3.653-0.297,5.393-0.87l102.4-34.133c2.515-0.84,4.8-2.254,6.673-4.13    l224.802-224.802C484.25,86.023,484.253,44.657,458.742,19.142z"/>
	</g>
</g><g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>`

var db = {}



const idGenerator = (n = 8) => new Array(n).fill().map(_ => ~~(10 * Math.random())).join('')
const hashcode = location.hash.slice(1)
var subjectList = []
var thisSub = null
var eventList = []

const colorInput = document.querySelector('#colorBackground')
colorInput.addEventListener('input', () => {
    socket.emit('materiaColorChange', { newColor: colorInput.value, hashCode: hashcode })
})

socket.on('updateSubjects', list => {
    subjectList = list
    thisSub = subjectList[subjectList.findIndex(el => el.id === hashcode)]
    document.querySelector('#materiaTitle').innerText = thisSub.name
    document.title = thisSub.name
    colorInput.value = thisSub.color
    document.querySelector('body').style.backgroundColor = thisSub.color
    updateTarefas()
    fillTableCalendar(monthCounter, yearCounter)
})
socket.on('updateEvents', e_l => {
    eventList = e_l
    fillTableCalendar(monthCounter, yearCounter)
})


const tarefas = document.querySelector('#tarefas > tbody')
const updateTarefas = () => {
    tarefas.innerHTML = ''
    var counter = 0
    thisSub.activities.sort((a, b) => ((new Date(a.prazoDateFormat)).getTime()) - ((new Date(b.prazoDateFormat)).getTime()))
    thisSub.activities.forEach(({ tarefa, dia, prazo, done, id }) => {
        tarefas.innerHTML += `
        <tr class="show disable-select" id="index${id}">
            <td onclick="openTarefa('${id}')">${tarefa}</td>
            <td>${dia}</td>
            <td>${prazo}</td>
            <td onclick="checkUncheck('${id}')" id="${done ? 'greenes' : 'redus'}">${done ? checkSVG : cancelSGV}</td>
            <td id="tdSVG">
             <span id="spanSVG" onclick="deleteTarefa('${id}','${tarefa}')">${garbageSVG}</span>
             <span id="spanSVG" onclick="editTarefa('${id}')">${editSVG}</span>
             </td>
        </tr>
        `
        if (done) {
            counter++
        }
    });

    if (counter > 0) {
        //verde        
        // document.querySelector('.container').style.background = `rgba(0,255,0,${counter / db.tarefas.length * 0.7 + 0.3})`       
    } else {
        //vermelho
        // document.querySelector('.container').style.background = `rgba(255,0,0,${Math.abs(counter) / db.tarefas.length * 0.7 + 0.3})`
    }
    if (isNaN(counter / thisSub.activities.length)) {
        document.querySelector('#indicatorRed').style.width = `${0}%`
        document.querySelector('#indicatorGreen').style.width = `${1 * 71.25}%`
    } else {
        document.querySelector('#indicatorRed').style.width = `${Math.abs(thisSub.activities.length - counter) / thisSub.activities.length * 71.25}%`
        document.querySelector('#indicatorGreen').style.width = `${Math.abs(counter / thisSub.activities.length) * 71.25}%`
    }
}


const popup = document.querySelector('#popup-addTarefa')
const popup2 = document.querySelector('#popup-viewTarefa')
const popup3 = document.querySelector('#popup-editTarefa')
popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popup.style.display = 'none'
    }
})
popup2.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popup2.style.display = 'none'
    }
})
popup3.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popup3.style.display = 'none'
    }
})

const tarefaTitle = document.querySelector('#tarefaTitleForm')
const tarefaDate = document.querySelector('#prazoForm')
const descricao = document.querySelector('#descricao')
tarefaDate.valueAsDate = new Date()


function popupAddClicked() {
    popup.style.display = 'block'
    tarefaTitle.focus()
    setTimeout(() => {
        tarefaTitle.value = ''
    }, 50)
}

function putItRight(e) {
    let aux = []
    for (let index = e.length - 1; index >= 0; index--) {
        if (index == e.length - 1 || index == e.length - 2) {
            aux.push(e[index])
        } else if (index == e.length - 4 || index == e.length - 5) {
            aux.push(e[index])
        } else if (index == e.length - 3 || index == e.length - 6) {
            aux.push('/')
        } else {
            aux.push(e[index])
        }
    }
    let aux2 = aux[1]
    aux[1] = aux[0]
    aux[0] = aux2
    aux2 = aux[4]
    aux[4] = aux[3]
    aux[3] = aux2
    aux2 = aux[9]
    aux3 = aux[8]
    aux4 = aux[7]
    aux5 = aux[6]
    aux[6] = aux2
    aux[7] = aux3
    aux[8] = aux4
    aux[9] = aux5
    return aux.join('')
}

function submitTarefa() {
    const toDay = new Date()
    const month = toDay.getMonth() + 1 < 10 ? 0 + (toDay.getMonth() + 1).toString() : toDay.getMonth() + 1
    var day = '0' + toDay.getDate()
    if (day.length == 3) {
        day = day.slice(1)
    }    const toDayString = `${day}/${month}/${toDay.getUTCFullYear()}`
    if (tarefaTitle.value) {
        var activitiesTotalList = subjectList.map(({activities}) => activities).flat()
        var id = idGenerator(10)
        while (activitiesTotalList.map(el => el.id).indexOf(id) != -1) {
            id = idGenerator(10)
        }
        const prazoDATE = new Date(tarefaDate.value) || new Date()
        const string_date_prazo = `${prazoDATE.getUTCMonth() + 1} ${prazoDATE.getUTCDate()} ${prazoDATE.getUTCFullYear()}`
        const newTarefa =
        {
            id: id,
            tarefa: tarefaTitle.value,
            dia: toDayString,
            diaDate: toDay,
            prazo: putItRight(tarefaDate.value),
            prazoDate: prazoDATE,
            prazoDateFormat: string_date_prazo,
            descricao: descricao.value,
            done: false
        }
        socket.emit('newTarefa', { newTarefa: newTarefa, hashCode: hashcode })
        tarefaDate.valueAsDate = new Date()
        tarefaTitle.value = ''
        descricao.value = ''
        popup.style.display = 'none'
    } else {
        window.alert('Qual o nome de sua Tarefa?')
    }

}

function deleteTarefa(id, tarefa) {
    if (window.confirm(`Certeza que deseja deletar a tarefa ${tarefa}?`)) {
        socket.emit('deleteTarefa', { id: id, hashCode: hashcode })
    }
}

var idOfTarefaThatIsBeingEdited = null

function editTarefa(id){
    idOfTarefaThatIsBeingEdited = id
    const t = thisSub.activities[thisSub.activities.findIndex(el => el.id == id)]
    popup3.style.display = 'block'
    document.querySelector('#tarefaTitleForm_edit').value = t.tarefa
    document.querySelector('#prazoForm_edit').valueAsDate = new Date(t.prazoDateFormat)
    document.querySelector('#descricao_edit').value = t.descricao
}

function updateTarefaEdited(){
    const tarefaDate_edit = document.querySelector('#prazoForm_edit')
    const tarefaTitle_edit = document.querySelector('#tarefaTitleForm_edit')
    const descricao_edit = document.querySelector('#descricao_edit')
    
    const toDay = new Date()
    const month = toDay.getMonth() + 1 < 10 ? 0 + (toDay.getMonth() + 1).toString() : toDay.getMonth() + 1
    var day = '0'+toDay.getDate() 
    if(day.length == 3){
        day = day.slice(1)
    }
    const toDayString = `${day}/${month}/${toDay.getUTCFullYear()}`
    const prazoDATE = new Date(tarefaDate_edit.value) || new Date()

    const string_date_prazo = `${prazoDATE.getUTCMonth() + 1} ${prazoDATE.getUTCDate()} ${prazoDATE.getUTCFullYear()}`
    const newTarefa =
    {
        id: idOfTarefaThatIsBeingEdited,
        tarefa: tarefaTitle_edit.value,
        dia: toDayString,
        diaDate: toDay,
        prazo: putItRight(tarefaDate_edit.value),
        prazoDate: prazoDATE,
        prazoDateFormat: string_date_prazo,
        descricao: descricao_edit.value,
        done: false
    }
    socket.emit('editTarefa', { tarefa: newTarefa, id: idOfTarefaThatIsBeingEdited, hashCode: hashcode})    
    popup3.style.display = 'none'
}

// function openTarefa(id) {
//     const t = thisSub.activities[thisSub.activities.findIndex(el => el.id == id)]
//     popup2.style.display = 'block'
//     document.querySelector('#shoT_Title').innerText = t.tarefa
//     document.querySelector('#shoT_Descricao').innerText = t.descricao
//     document.querySelector('#shoT_Prazo').innerText = `Prazo ${t.prazo}`
//     document.querySelector('#shoT_Dia').innerText = `Dia ${t.dia}`


//     const toDay = new Date()
//     const month = toDay.getMonth() + 1 < 10 ? 0 + (toDay.getMonth() + 1).toString() : toDay.getMonth() + 1
//     const day = toDay.getDate() + 1 < 10 ? 0 + (toDay.getDate()).toString() : toDay.getDate()
//     const toDayString = `${day}/${month}/${toDay.getUTCFullYear()}`

//     document.querySelector('#shoT_Hoje').innerText = `Hoje ${toDayString}`
//     const dif = diffDates(new Date(t.prazoDate), toDay)
//     document.querySelector('#shoT_Title').style.background = t.done ? 'rgb(174, 255, 178)' : 'rgb(255, 174, 174)'
//     document.querySelector('#shoT_TempoRestante').style.background = t.done ? 'rgb(174, 255, 178)' : 'rgb(255, 174, 174)'
//     if (dif < 0) {
//         if (Math.abs(dif) == 1) {
//             document.querySelector('#shoT_TempoRestante').innerText = `Já se passou um dia`
//         } else {
//             document.querySelector('#shoT_TempoRestante').innerText = `Já se passaram ${Math.abs(dif)} dias`
//         }

//     } else {
//         if (Math.abs(dif) == 1) {
//             document.querySelector('#shoT_TempoRestante').innerText = `Resta um dia`
//         } else if (dif == 0) {
//             document.querySelector('#shoT_TempoRestante').innerText = `Hoje é o prazo`
//         } else {
//             document.querySelector('#shoT_TempoRestante').innerText = `Restam ${Math.abs(dif)} dias`
//         }
//         document.querySelector('#shoT_Title').style.background = t.done ? 'rgb(174, 255, 178)' : 'rgb(255, 247, 174)'
//         document.querySelector('#shoT_TempoRestante').style.background = t.done ? 'rgb(174, 255, 178)' : 'rgb(255, 247, 174)'
//         if (dif >=7 ){
//             document.querySelector('#shoT_Title').style.background = 'rgb(174, 255, 178)'
//         }
//     }

// }
const popupViewEvent = document.querySelector('#popup-popupViewEvent')
popupViewEvent.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupViewEvent.style.display = 'none'
    }
})

function openTarefa(id) {
    const t = thisSub.activities[thisSub.activities.findIndex(el => el.id == id)]
    popupViewEvent.style.display = 'block'

    document.querySelector('#sub_title_2_3').innerText = ''

    document.querySelector('#sub_title_2_3').style.fontSize = '60px'
    document.querySelector('#shoT_Title_2').innerText = `${t.tarefa}`
    document.querySelector('#shoT_Descricao_2').innerText = t.descricao
    document.querySelector('#shoT_Dia_2').innerText = `${t.prazo}`


    const toDay = new Date()
    const month = toDay.getMonth() + 1 < 10 ? 0 + (toDay.getMonth() + 1).toString() : toDay.getMonth() + 1
    const day = toDay.getDate() + 1 < 10 ? 0 + (toDay.getDate()).toString() : toDay.getDate()
    const toDayString = `${day}/${month}/${toDay.getUTCFullYear()}`

    const dif = diffDates(new Date(t.prazoDateFormat), toDay)
    var finalString = `faltam ${dif} dias`
    if (dif < 0) {
        if (Math.abs(dif) == 1) {
            finalString = `Já se passou um dia`
        } else {
            finalString = `Já se passaram ${Math.abs(dif)} dias`
        }

    } else {
        if (Math.abs(dif) == 1) {
            finalString = `Resta um dia para a tarefa`
        } else if (dif == 0) {
            finalString = `Hoje é o dia de entregar a tarefa`
        } else {
            finalString = `Restam ${Math.abs(dif)} dias para a tarefa`
        }
    }
    document.querySelector('#shoT_Hoje_2').innerText =
        `Hoje é dia ${toDayString}, a tarefa ${t.tarefa} ${dif < 0 ? `era pro dia ${t.prazo}` : dif > 0 ? `é pro dia ${t.prazo}` : "é pra hoje"}, ${finalString.toLowerCase()}.`



}

function checkUncheck(id) {
    socket.emit('checkUncheck', { id: id, hashCode: hashcode })
}

function diffDates(dateOne, dateTwo) {
    if (typeof dateTwo === 'undefined') {
        dateTwo = new Date();
    }
    return Math.ceil((dateOne.getTime() - dateTwo.getTime()) / (1000 * 60 * 60 * 24))
}

function hoverADD() {
    document.querySelector('#svgtitle').style.opacity = 1
    document.querySelector('#svgtitle').style.transition = '0.2s ease, margin-left 0.7s ease, background-color 2s'
    document.querySelector('#svgtitle').style.backgroundColor = '#faa7a7'
    document.querySelector('#svgtitle').style.marginLeft = '15px'
}
function nothoverADD() {
    document.querySelector('#svgtitle').style.opacity = 0
    document.querySelector('#svgtitle').style.marginLeft = '0px'
    document.querySelector('#svgtitle').style.backgroundColor = '#faa7a700'
    document.querySelector('#svgtitle').style.transition = '2s ease 1s, margin-left 0.7s ease, background-color 2s'
}



const poputTutorial = document.querySelector('#popup-tutorial')
poputTutorial.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        poputTutorial.style.display = 'none'
    }
})
function showTutorial() {
    poputTutorial.style.display = 'block'
}

function comoUsarShow() {
    document.querySelector('#buttonComoUsar').style.transition = 'opacity 0.5s, box-shadow 1s, background-color 1s , border-radius 500ms'
    document.querySelector('#buttonComoUsar').style.opacity = '1'
}
function comoUsarHide() {
    document.querySelector('#buttonComoUsar').style.transition = 'opacity 6s, box-shadow 1s, background-color 1s , border-radius 500ms'
    document.querySelector('#buttonComoUsar').style.opacity = '0'
}
window.document.addEventListener('mousemove', (event) => {
    let y = event.clientY / innerHeight;
    let x = event.clientX / innerWidth;
    if (y < 0.1 && x < 0.5) {
        comoUsarShow()
    } else {
        comoUsarHide()
    }
})

window.addEventListener('keydown', ({ key }) => {
    if (key === 'Escape') {
        poputTutorial.style.display = 'none'
        tarefaDate.valueAsDate = new Date()
        tarefaTitle.value = ''
        descricao.value = ''
        popup.style.display = 'none'
        popup3.style.display = 'none'
        popupViewEvent.style.display = 'none'
        poputTutorial.style.display = 'none'
    }
    if ((key === 'a' || key === 'A') && popup.style.display != 'block' && popup3.style.display != 'block' && popup2.style.display != 'block' && popupViewEvent.style.display != 'block' && poputTutorial.style.display != 'block') {
        popupAddClicked()
    }
    const isTextAreaAddTarefaFocused = document.querySelector('#descricao') === document.activeElement
    if (key === 'Enter' && popup.style.display == 'block' && !isTextAreaAddTarefaFocused) {
        submitTarefa()
    }
    const isTextAreaEditTarefaFocused = document.querySelector('#descricao_edit') === document.activeElement
    if (key === 'Enter' && popup3.style.display == 'block' && !isTextAreaEditTarefaFocused) {
        updateTarefaEdited()
    }
    popup2.style.display = 'none'
})


const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];
const calendar = new CalendarBase.Calendar({
    siblingMonths: true,
    weekStart: true
});
const today = new Date();

var monthCounter = today.getUTCMonth()
var yearCounter = today.getUTCFullYear()

const calendarMonth = document.querySelector('.js-calendar-month'),
    calendarDiv = document.querySelector('.js-calendar');
calendarMonth.innerHTML = months[today.getUTCMonth()];

const calendarTable = document.querySelector('.table-fill')


const daysHaveTheSameYearMonthDay = (day1, day2) =>
    day1.getUTCFullYear() === day2.getUTCFullYear() &&
    day1.getUTCMonth() === day2.getUTCMonth() &&
    day1.getDate() === day2.getDate()


function fillTableCalendar(month, year) {
    const tableRowsList = [...document.querySelectorAll('.tableRow')]
    tableRowsList.forEach(el => {
        el.innerHTML = ''
    })
    calendarMonth.innerHTML = `${months[month]} - ${year}`;
    var counterTableRowIndex = 0
    calendar
        .getCalendar(year, month)
        .forEach(function (date, index) {
            if (date) {
                const hoy = new Date()

                const add = daysHaveTheSameYearMonthDay(new Date(), new Date(date.year, date.month, date.day)) ? 'background-color:#55990033' : ''

                tableRowsList[counterTableRowIndex].innerHTML += `
                <td style="${add}" class="calendar-day disable-select day text-center ${(date.siblingMonth ? ' -sibling-month' : '')}">
                ${date.day}
                <div class="flexDivOfTaskSquares" style="display:flex; margin-top:5px; align-items: center;
                justify-content: center;"
                value="${new Date(date.year, date.month, date.day)}"> </div>
                </td>
                `
            } else {
                tableRowsList[counterTableRowIndex].innerHTML += `
                `
            }
            if ((index + 1) % 7 == 0) {
                counterTableRowIndex++
            }
        });
    const calendarDays = [...document.querySelectorAll('.flexDivOfTaskSquares')]
    const mappedActivities = thisSub.activities
    calendarDays.forEach(day => {
        const dayDate = new Date(day.getAttribute('value'))
        for (let task of mappedActivities) {
            const taskDate = new Date(task.prazoDateFormat)
            if (daysHaveTheSameYearMonthDay(taskDate, dayDate)) {
                const border = !task.done ? 'box-shadow: 0px 0px 10px 3px #880000; ' : 'box-shadow: 0px 0px 0px 2px green'
                day.innerHTML += `
                    <div class="pointer disable-select divToHaveColorsChange"  value="${thisSub.color}"
                    style = "background:${thisSub.color}; width:30px; height:30px; margin:0px 5px;border-radius:30px;${border}"
                    onclick="openTarefa('${task.id}')">
                    </div>
                    `
            }
        }
        for (const event of eventList) {
            const eventDate = new Date(event.prazoDateFormat)
            if (daysHaveTheSameYearMonthDay(eventDate, dayDate)) {
                day.innerHTML += `
                    <div class="pointer disable-select divToHaveColorsChange" 
                    style = "background:${event.color}; width:30px; height:30px; margin:0px 5px; box-shadow:0px 0px 10px black;"
                    onclick="openEvent('${event.id}')" value="${event.color}">
                    </div>
                    `
            }
        }
    })
}


function fowardMonth() {
    monthCounter++
    if (monthCounter == 12) {
        monthCounter = 0
        yearCounter++
    }
    fillTableCalendar(monthCounter, yearCounter)
}

function backWardMonth() {
    monthCounter--
    if (monthCounter == -1) {
        monthCounter = 11
        yearCounter--
    }
    fillTableCalendar(monthCounter, yearCounter)
}

// const popupViewEvent = document.querySelector('#popup-popupViewEvent')
// popupViewEvent.addEventListener('click', event => {
//     const classNameOfClickedElement = event.target.classList[0]
//     const classNames = ['popup-close', 'popup-wrapper']
//     const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
//     if (shouldClosePopup) {
//         popupViewEvent.style.display = 'none'
//     }
// })

function openEvent(id) {
    document.querySelector('#sub_title_2_3').innerText = 'Evento'
    document.querySelector('#sub_title_2_3').style.fontSize = '40px'
    const eventReq = eventList[eventList.findIndex(el => el.id === id)]

    // document.querySelector('#popupToChangeColor_2').style.backgroundColor = eventReq.color + '33'

    popupViewEvent.style.display = 'block'
    document.querySelector('#shoT_Title_2').innerText = `${eventReq.name}`
    document.querySelector('#shoT_Descricao_2').innerText = eventReq.description
    document.querySelector('#shoT_Dia_2').innerText = `${eventReq.dateString}`


    const toDay = new Date()
    const month = toDay.getMonth() + 1 < 10 ? 0 + (toDay.getMonth() + 1).toString() : toDay.getMonth() + 1
    const day = toDay.getDate() + 1 < 10 ? 0 + (toDay.getDate()).toString() : toDay.getDate()
    const toDayString = `${day}/${month}/${toDay.getUTCFullYear()}`

    const dif = diffDates(new Date(eventReq.prazoDateFormat), toDay)
    var finalString = `faltam ${dif} dias`
    if (dif < 0) {
        if (Math.abs(dif) == 1) {
            finalString = `Já se passou um dia`
        } else {
            finalString = `Já se passaram ${Math.abs(dif)} dias`
        }

    } else {
        if (Math.abs(dif) == 1) {
            finalString = `Resta um dia para o evento`
        } else if (dif == 0) {
            finalString = `Hoje é o dia do evento`
        } else {
            finalString = `Restam ${Math.abs(dif)} dias para o evento`
        }
    }
    document.querySelector('#shoT_Hoje_2').innerText =
        `Hoje é dia ${toDayString}, o evento ${eventReq.name} ${dif < 0 ? "aconteceu" : dif > 0 ? "acontecerá" : "acontece"} dia ${eventReq.dateString}, ${finalString.toLowerCase()}.`
}