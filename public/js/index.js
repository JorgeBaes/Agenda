const socket = io.connect('http://localhost:3000/');
//https://mandrak.herokuapp.com/
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

const idGenerator = (n = 8) => new Array(n).fill().map( _ => ~~(10*Math.random())).join('')

const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

var weekCalendar = []
var subjectList = []
var eventList = []


const enableColorOnSub = document.querySelector('#mytoggle')
enableColorOnSub.addEventListener('input', () => {
    updateWeekColors()
    socket.emit('updateEnableColorOnSub', enableColorOnSub.checked)
})



const colorInput = document.querySelector('#colorBackground')
colorInput.addEventListener('input', () => {    
    socket.emit('colorChange', colorInput.value)
})


const tarefaTitleADD = document.querySelector('#tarefaTitleForm')
const tarefaDateADD = document.querySelector('#prazoForm')
const descricaoADD = document.querySelector('#descricao')
tarefaDateADD.valueAsDate = new Date()

const popupaddTarefa = document.querySelector('#popup-addTarefa')
var subIDTOADDTASK = null
function openPopupAddTaskToSub(subID) {
    subIDTOADDTASK = subID
    popupaddTarefa.style.display = 'block'
    const thatSub = subjectList[subjectList.findIndex(el => el.id == subIDTOADDTASK)]
    document.querySelector('#addTarefaSubTitle').innerText = thatSub.name
}

popupaddTarefa.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupaddTarefa.style.display = 'none'
        tarefaDateADD.valueAsDate = new Date()
        tarefaTitleADD.value = ''
        descricaoADD.value = ''
        popupaddTarefa.style.display = 'none'
    }
})

const popupCreateRow = document.querySelector('#popup-wraper-createRow')
function addRowToWeekBoardOpenPopup(){
    popupCreateRow.style.display = 'block'   
}
popupCreateRow.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper-create']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupCreateRow.style.display = 'none'
    }
})

const popupViewEvent = document.querySelector('#popup-popupViewEvent')
popupViewEvent.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupViewEvent.style.display = 'none'
        document.querySelector('#checkbox_div').style.display = 'none'
    }
})

const popupCreateEvent = document.querySelector('#popup-wraper-createEvent')
popupCreateEvent.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupCreateEvent.style.display = 'none'
    }
})

const popupViewTarefa = document.querySelector('#popup-viewTarefa')
popupViewTarefa.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupViewTarefa.style.display = 'none'
    }
})

const popupCreateSub = document.querySelector('#popup-wraper-createSub')
function createSubjectOpenPopup() {
    popupCreateSub.style.display = 'block'
    subColor.value = randomColor()
}
popupCreateSub.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupCreateSub.style.display = 'none'
        subTextInput.value = ''
        subColor.value = randomColor()
    }
})




const inputDay1 = document.querySelector('#inputTextday1')
const inputDay2 = document.querySelector('#inputTextday2')
const inputDay3 = document.querySelector('#inputTextday3')
const inputDay4 = document.querySelector('#inputTextday4')
const inputDay5 = document.querySelector('#inputTextday5')
const inputDay6 = document.querySelector('#inputTextday6')
const inputDay7 = document.querySelector('#inputTextday7')

const selectSubDay1 = document.querySelector('#selectSubDay1')
const selectSubDay2 = document.querySelector('#selectSubDay2')
const selectSubDay3 = document.querySelector('#selectSubDay3')
const selectSubDay4 = document.querySelector('#selectSubDay4')
const selectSubDay5 = document.querySelector('#selectSubDay5')
const selectSubDay6 = document.querySelector('#selectSubDay6')
const selectSubDay7 = document.querySelector('#selectSubDay7')

const inputTime = document.querySelector('#timeToAddToRow')




function resetInputs(){
    inputDay1.value = ''
    inputDay2.value = ''
    inputDay3.value = ''
    inputDay4.value = ''
    inputDay5.value = ''
    inputDay6.value = ''
    inputDay7.value = ''
    selectSubDay1.value = ''
    selectSubDay2.value = ''
    selectSubDay3.value = ''
    selectSubDay4.value = ''
    selectSubDay5.value = ''
    selectSubDay6.value = ''
    selectSubDay7.value = ''
    inputTime.value = ''
    popupaddTarefa.style.display = 'none'
    tarefaDateADD.valueAsDate = new Date()
    tarefaTitleADD.value = ''
    descricaoADD.value = ''
    popupaddTarefa.style.display = 'none'
}

const convertToDayTime = time => 
    parseInt(time.split('').slice(0, 2).join('')) * 60 + parseInt(time.split('').slice(3, 5).join(''))

function addRowToWeekBoard(){
    const inputTimeIsValuable = inputTime.value !== ''    
    if (inputTimeIsValuable){
        var id = idGenerator(10)
        while (weekCalendar.map(el => el.id).indexOf(id) != -1){
            id = idGenerator(10)
        }
        const time = inputTime.value
        const dayTime = convertToDayTime(time)
        const newRow = {
            id: id,
            timeString: time,
            timeCompare: dayTime,
            day1: inputDay1.value,
            day2: inputDay2.value,
            day3: inputDay3.value,
            day4: inputDay4.value,
            day5: inputDay5.value,
            day6: inputDay6.value,
            day7: inputDay7.value,
            matDay1: selectSubDay1.value || '',
            matDay2: selectSubDay2.value || '',
            matDay3: selectSubDay3.value || '',
            matDay4: selectSubDay4.value || '',
            matDay5: selectSubDay5.value || '',
            matDay6: selectSubDay6.value || '',
            matDay7: selectSubDay7.value || '',
        }
        resetInputs()        
        socket.emit('addWeekRow', newRow)
        popupCreateRow.style.display = 'none'
    }else{
        window.alert('Você não pode criar uma divisão sem informar o horário. Por favor, informe o horário')
    }
}




const subColor = document.querySelector('#subColor')
const subTextInput = document.querySelector('#textToCreateSub')
function createSub(){
    if (subTextInput.value !== ''){
        const existedSub = subjectList.findIndex(el => el.name == subTextInput.value) != -1
        if (!existedSub){
            var idSub = idGenerator(10)
            while (subjectList.map(el => el.id).indexOf(idSub) != -1) {
                idSub = idGenerator(10)
            }
            const newSub =   {
                id: idSub,
                color: subColor.value,
                name: subTextInput.value,
                activities: []
            }
            socket.emit('createSubject', newSub)
            subTextInput.value = ''
            subColor.value = randomColor()
            // popupCreateSub.style.display = 'none'            
        }else{
            window.alert('Esta Tag já existe')
        }
    }else{
        window.alert('Escreva o nome da Tag')
    }
}

function deleteRow(id){
    if (window.confirm('Você tem certeza que deseja deletar esta linha?')){
        socket.emit('deleteRow',id)
    }
}

const selectSubDayDelete = document.querySelector('#selectSubDayDelete')
function deleteSub(){
    if (selectSubDayDelete.value !== ''){
        if (window.confirm('Você deseja mesmo deletar esta Tag?')) {
            socket.emit('deleteSub', selectSubDayDelete.value)
            popupCreateSub.style.display = 'none'
        }
    }
    
}

const popupEditRow = document.querySelector('#popup-wraper-editRow')
popupEditRow.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper-create']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupEditRow.style.display = 'none'
    }
})

const popupEditEvent = document.querySelector('#popup-wraper-editEvent')
popupEditEvent.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupEditEvent.style.display = 'none'
    }
})


const selectSubDay1Edit = document.querySelector('#selectSubDay1Edit')
const selectSubDay2Edit = document.querySelector('#selectSubDay2Edit')
const selectSubDay3Edit = document.querySelector('#selectSubDay3Edit')
const selectSubDay4Edit = document.querySelector('#selectSubDay4Edit')
const selectSubDay5Edit = document.querySelector('#selectSubDay5Edit')
const selectSubDay6Edit = document.querySelector('#selectSubDay6Edit')
const selectSubDay7Edit = document.querySelector('#selectSubDay7Edit')

const inputTextday1Edit = document.querySelector('#inputTextday1Edit')
const inputTextday2Edit = document.querySelector('#inputTextday2Edit')
const inputTextday3Edit = document.querySelector('#inputTextday3Edit')
const inputTextday4Edit = document.querySelector('#inputTextday4Edit')
const inputTextday5Edit = document.querySelector('#inputTextday5Edit')
const inputTextday6Edit = document.querySelector('#inputTextday6Edit')
const inputTextday7Edit = document.querySelector('#inputTextday7Edit')

const timeToAddToRowEdit = document.querySelector('#timeToAddToRowEdit')
var idThatIsBeingEdited = 0



function editRow(id_){
    popupEditRow.style.display = 'block'
    idThatIsBeingEdited = id_
    const rowToEdit = weekCalendar[weekCalendar.findIndex(({id}) => id === id_)]

    selectSubDay1Edit.value = rowToEdit.matDay1
    selectSubDay2Edit.value = rowToEdit.matDay2
    selectSubDay3Edit.value = rowToEdit.matDay3
    selectSubDay4Edit.value = rowToEdit.matDay4
    selectSubDay5Edit.value = rowToEdit.matDay5
    selectSubDay6Edit.value = rowToEdit.matDay6
    selectSubDay7Edit.value = rowToEdit.matDay7

    inputTextday1Edit.value = rowToEdit.day1
    inputTextday2Edit.value = rowToEdit.day2
    inputTextday3Edit.value = rowToEdit.day3
    inputTextday4Edit.value = rowToEdit.day4
    inputTextday5Edit.value = rowToEdit.day5
    inputTextday6Edit.value = rowToEdit.day6
    inputTextday7Edit.value = rowToEdit.day7

    timeToAddToRowEdit.value = rowToEdit.timeString
}

function updateRowEdited(){
    const rowToEdit = weekCalendar[weekCalendar.findIndex(({ id }) => id === idThatIsBeingEdited)]

    rowToEdit.matDay1 = selectSubDay1Edit.value
    rowToEdit.matDay2 = selectSubDay2Edit.value
    rowToEdit.matDay3 = selectSubDay3Edit.value
    rowToEdit.matDay4 = selectSubDay4Edit.value
    rowToEdit.matDay5 = selectSubDay5Edit.value
    rowToEdit.matDay6 = selectSubDay6Edit.value
    rowToEdit.matDay7 = selectSubDay7Edit.value

    rowToEdit.day1 = inputTextday1Edit.value
    rowToEdit.day2 = inputTextday2Edit.value
    rowToEdit.day3 = inputTextday3Edit.value
    rowToEdit.day4 = inputTextday4Edit.value
    rowToEdit.day5 = inputTextday5Edit.value
    rowToEdit.day6 = inputTextday6Edit.value
    rowToEdit.day7 = inputTextday7Edit.value

    rowToEdit.timeString = timeToAddToRowEdit.value
    rowToEdit.timeCompare = convertToDayTime(timeToAddToRowEdit.value)

    popupEditRow.style.display = 'none'
    socket.emit('updateRows_edit', weekCalendar)
}

function updateWeekColors(){
    if (enableColorOnSub.checked){
        const weektd = [...document.querySelectorAll(`td`)]
        weektd.forEach(el => {
            el.style.transition = "400ms"
        })
        for (let { id, color } of subjectList){
            const weekSpan = [...document.querySelectorAll(`.mat_id_${id}`)]
            weekSpan.forEach( el => {
                el.style.backgroundColor = color
            })        
        }
        subjectList.forEach(({id, color}) => {
            const htmlOBJS = [...document.querySelectorAll(`.subId_${id}`)]
            htmlOBJS.forEach( el => {
                el.style.backgroundColor = color
            })            
        })
        const divToHaveColorsChange = [...document.querySelectorAll(`.divToHaveColorsChange`)]
        divToHaveColorsChange.forEach( el => {
            const color = el.getAttribute('value')
            el.style.backgroundColor = color
        })
    }else{
        const weektd = [...document.querySelectorAll(`td`)]
        weektd.forEach(el => {
            el.style.transition = "0s"
        })
        for (let { id, color } of subjectList) {
            const weekSpan = [...document.querySelectorAll(`.mat_id_${id}`)]
            weekSpan.forEach(el => {
                el.style.backgroundColor = 'white'
            })
        }
        subjectList.forEach(({ id }) => {
            const htmlOBJS = [...document.querySelectorAll(`.subId_${id}`)]
            htmlOBJS.forEach(el => {
                el.style.backgroundColor = 'White'
            }) 
        })
        const divToHaveColorsChange = [...document.querySelectorAll(`.divToHaveColorsChange`)]
        divToHaveColorsChange.forEach(el => {
            el.style.backgroundColor = 'white'
        })
    }
}

function updateTaskPorcentageBar(){
    const arrayWithCountedSubs = subjectList.map(({name, activities}) => {
        if (weekCalendar.some(el =>{
            const arrayToCompare = [el.matDay1, el.matDay2, el.matDay3, el.matDay4, el.matDay5, el.matDay6, el.matDay7]
            if (arrayToCompare.indexOf(name) != -1){
                return true
            }
            return false
        })){
            return activities
        }      
        return activities
    }).filter(_ => _!== undefined)
    const numOfTasksDone = arrayWithCountedSubs
        .flat()
        .map(({ done }) => done?1:0)
        .reduce((acc, currentValue) => currentValue + acc,0)
    const numOfTasks = arrayWithCountedSubs
        .flat()
        .map(({ done }) => done ? 1 : 0)
        .length
    if (isNaN(numOfTasksDone / numOfTasks)){
        document.querySelector('#indicatorRed').style.width = `${0}%`
        document.querySelector('#indicatorGreen').style.width = `${100}%`
    }else{
        document.querySelector('#indicatorRed').style.width = `${Math.abs(numOfTasks - numOfTasksDone) / numOfTasks * 100}%`
        document.querySelector('#indicatorGreen').style.width = `${Math.abs(numOfTasksDone / numOfTasks) * 100}%`
    }
}



socket.on('updateColor', color => {
    document.querySelector('body').style.backgroundColor = color
    colorInput.value = color
})

const weekTbody = document.querySelector('#weekTbody')
socket.on('updateWeekCalendar', newWeekCalendar => {
    weekCalendar = newWeekCalendar
    weekCalendar.sort((a , b) => a.timeCompare - b.timeCompare)
    weekTbody.innerHTML = ''
    weekCalendar.forEach(({id, timeString, day1, day2, day3, day4, day5, day6, day7,
        matDay1, matDay2, matDay3, matDay4, matDay5, matDay6, matDay7}) => {        
        const matDay1C = subjectList.findIndex(el => el.name === matDay1) === -1 ? 'null' : subjectList[subjectList.findIndex(el => el.name === matDay1)].id
        const matDay2C = subjectList.findIndex(el => el.name === matDay2) === -1 ? 'null' : subjectList[subjectList.findIndex(el => el.name === matDay2)].id
        const matDay3C = subjectList.findIndex(el => el.name === matDay3) === -1 ? 'null' : subjectList[subjectList.findIndex(el => el.name === matDay3)].id
        const matDay4C = subjectList.findIndex(el => el.name === matDay4) === -1 ? 'null' : subjectList[subjectList.findIndex(el => el.name === matDay4)].id
        const matDay5C = subjectList.findIndex(el => el.name === matDay5) === -1 ? 'null' : subjectList[subjectList.findIndex(el => el.name === matDay5)].id
        const matDay6C = subjectList.findIndex(el => el.name === matDay6) === -1 ? 'null' : subjectList[subjectList.findIndex(el => el.name === matDay6)].id
        const matDay7C = subjectList.findIndex(el => el.name === matDay7) === -1 ? 'null' : subjectList[subjectList.findIndex(el => el.name === matDay7)].id
        weekTbody.innerHTML+=`
        <td class="text-center disable-select" style="text-align: center;">
        ${timeString}
        </td>
        <td class="text-center disable-select day1 day mat_id_${matDay1C} ${matDay1C === 'null'?'nopointer':'pointer'}" onclick="openTab('${matDay1}')">
            ${day1}<br><span class="matName mat_id_${matDay1C}">${matDay1}</span>
        </td>
        <td class="text-center disable-select day2 day mat_id_${matDay2C} ${matDay2C === 'null' ? 'nopointer' : 'pointer'}" onclick="openTab('${matDay2}')">
            ${day2}<br><span class="matName mat_id_${matDay2C}">${matDay2}</span>
        </td>
        <td class="text-center disable-select day3 day mat_id_${matDay3C} ${matDay3C === 'null' ? 'nopointer' : 'pointer'}" onclick="openTab('${matDay3}')">
            ${day3}<br><span class="matName mat_id_${matDay3C}">${matDay3}</span>
        </td>
        <td class="text-center disable-select day4 day mat_id_${matDay4C} ${matDay4C === 'null' ? 'nopointer' : 'pointer'}" onclick="openTab('${matDay4}')">
            ${day4}<br><span class="matName mat_id_${matDay4C}">${matDay4}</span>
        </td>
        <td class="text-center disable-select day5 day mat_id_${matDay5C} ${matDay5C === 'null' ? 'nopointer' : 'pointer'}" onclick="openTab('${matDay5}')">
            ${day5}<br><span class="matName mat_id_${matDay5C}">${matDay5}</span>
        </td>
        <td class="text-center disable-select day6 day mat_id_${matDay6C} ${matDay6C === 'null' ? 'nopointer' : 'pointer'}" onclick="openTab('${matDay6}')">
            ${day6}<br><span class="matName mat_id_${matDay6C}">${matDay6}</span>
        </td>
        <td class="text-center disable-select day7 day mat_id_${matDay7C} ${matDay7C === 'null' ? 'nopointer' : 'pointer'}" onclick="openTab('${matDay7}')">
            ${day7}<br><span class="matName mat_id_${matDay7C}">${matDay7}</span>
        </td>
        <td  style="width:10px">
            <span onclick="deleteRow('${id}')">${garbageSVG}</span><span onclick="editRow('${id}')">${editSVG}</span>
        </td>
    </tr>
        `
    });
    weekTbody.innerHTML += 
        `
    <tr>   
    <td class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" onclick="addRowToWeekBoardOpenPopup()" class="addSVGIcon animateSVG" height="35pt" viewBox="0 0 512 512" width="35pt">
            <title>Adicionar Linha</title>
            <path
                d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" />
            </svg>
    </td>   
                                   
    </tr>
    `  
    updateWeekColors()
    updateTaskPorcentageBar()
})

socket.on('updateColorChecked', val => {
    enableColorOnSub.checked = val
})

socket.on('updateSubjects', list => {
    subjectList = list
    const listOfSelectors = [...document.querySelectorAll('.selectSubDay')]
    for (let selector of listOfSelectors) {
        selector.innerHTML = '<option value="">Tag</option>'        
        subjectList.forEach( ({name}) => {
            selector.innerHTML +=`<option value="${name}">${name}</option>`
        })
    }
    const tagsSpace = document.querySelector('#tagsSpace')
    tagsSpace.innerHTML = ''
    subjectList.forEach(({name, id, activities}) => {
        const arrAux = activities.reduce((acc, current) => {
            if(!current.done){
                return acc+1
            }
            return acc 
        },0)
        valu = arrAux == 0 ? `<span id="activitiesNumNotificationFree"></span>` : `<span id="activitiesNumNotificationNotFree">${arrAux}</span>`
        
        tagsSpace.innerHTML += `
        <tr>
            <td class="pointer text-left subId_${id}"  onclick="openTabDirectFromRoot('${id}')">
                ${valu}&nbsp${name} 
            </td>
            <td class="pointer subId_${id}" onclick="openPopupAddTaskToSub('${id}')">
                <svg xmlns="http://www.w3.org/2000/svg" class="animateSVG2" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
            viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" width="45px" heigth="45px">            
            <g>
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                    <path
                        d="M4173.5,4997.4c-176.2-49.8-379.3-191.6-454-318l-30.6-51.7l-432.9-9.6c-287.3-3.8-455.9-15.3-503.8-32.6c-113-40.2-249-155.2-318-268.2l-63.2-105.4l-616.8-9.6c-597.6-9.6-618.7-11.5-699.2-53.6c-126.4-67-228-168.6-285.4-287.3L716,3752.4V-289.4v-4041.7l47.9-95.8c59.4-122.6,174.3-237.5,296.9-296.9l95.8-47.9l2040-5.7c1863.8-5.8,2045.8-3.8,2099.4,24.9c116.9,61.3,141.8,224.1,47.9,318l-55.5,55.6h-1996c-2212.4,0-2091.7-7.7-2153,124.5c-26.8,57.5-30.6,452-30.6,3963.2c0,3329.1,3.8,3911.5,26.8,3967c49.8,118.8,82.4,124.5,668.5,124.5h526.8l7.7-145.6c5.7-136,11.5-149.4,69-201.1l61.3-55.5h1911.7c1735.5,0,1915.5,1.9,1955.8,30.6c61.3,44.1,97.7,141.7,97.7,266.3v105.4h526.8c442.5,0,538.3-5.7,586.2-30.6c116.9-59.4,113,0,113-1827.4c0-1812.1-3.8-1746.9,105.4-1796.7c90-42.1,160.9-28.7,231.8,42.1l65.1,65.1l-3.8,1750.8l-5.7,1748.9l-53.6,109.2c-57.5,118.8-159,220.3-285.4,287.3c-80.5,42.1-97.7,44.1-699.2,49.8l-616.8,5.8l-57.5,101.5c-67.1,120.7-147.5,191.6-289.2,258.6c-101.5,47.9-120.7,49.8-536.3,57.5l-431,5.7l-57.5,78.5c-76.6,105.4-224.1,214.5-354.4,264.3C4531.7,5024.3,4311.4,5035.8,4173.5,4997.4z M4504.9,4597.1c113-40.2,195.4-114.9,252.8-229.9c82.4-162.8,91.9-164.7,660.8-164.7h482.7l55.5-55.5c51.7-51.7,55.6-67,55.6-201.1v-145.6H4384.2H2756V3942c0,124.5,5.7,151.3,46,197.3l46,53.6l517.2,9.6l519.1,9.6l57.5,55.6c32.6,32.6,59.4,67,59.4,78.5c0,44.1,114.9,180.1,176.2,212.6C4309.5,4627.7,4391.9,4637.3,4504.9,4597.1z" />
                    <path
                        d="M6780.5-300.8c-331.4-38.3-712.6-182-999.9-375.5c-664.7-444.4-1057.4-1275.7-976.9-2057.2c59.4-559.3,252.8-973.1,643.6-1367.7c277.7-281.6,530.6-444.4,860.1-555.5c823.7-275.8,1710.5-70.9,2317.8,538.3c609.1,607.2,814.1,1494.1,538.3,2317.8c-111.1,329.5-273.9,582.3-555.5,860.1C8221-557.5,7807.3-360.2,7269-300.8C7064-277.9,6985.5-277.9,6780.5-300.8z M7420.3-737.6c1103.3-228,1752.7-1438.6,1325.5-2472.9c-419.5-1019.1-1593.7-1455.8-2555.3-948.2c-494.2,260.5-837.1,712.6-948.2,1254.7c-53.6,258.6-40.2,628.3,30.7,871.6C5472.2-1364,5995.2-879.3,6675.2-731.8C6864.8-691.6,7211.5-693.5,7420.3-737.6z" />
                    <path
                        d="M6956.7-1532.5c-105.4-47.9-120.7-103.4-120.7-471.2v-325.6h-325.6c-371.6,0-425.3-13.4-471.2-128.3c-38.3-88.1-19.2-164.7,53.6-226c55.5-47.9,61.3-47.9,400.3-47.9h342.9v-346.7v-346.7l65.1-65.1c46-46,82.4-65.1,126.4-65.1c67.1,0,162.8,47.9,185.8,93.9c7.6,17.2,19.1,185.8,24.9,375.4l9.6,344.8l344.8,9.6c189.6,5.7,358.2,17.3,375.4,24.9c46,23,93.9,118.8,93.9,185.8c0,44-19.2,80.4-65.1,126.4l-65.1,65.1H7585h-346.7v344.8v344.8l-51.7,57.5C7123.4-1513.4,7041-1496.1,6956.7-1532.5z" />
                </g>
            </g>
        </svg>
            </td>
        </tr>
        `
    })   
    updateWeekColors()
    updateTaskPorcentageBar()
    document.querySelector('#hoverButtonOfTagsHow').style.height = `${document.querySelector('#tableOfTags').offsetHeight - 2}px`
    fillTableCalendar(monthCounter, yearCounter)
    if (document.querySelector('#checkbox_div').style.display == 'block'){
        if (tarefaOpened.t != null && tarefaOpened.sub != null){
            const newSub = subjectList[subjectList.findIndex(el => el.name === tarefaOpened.sub.name)]
            const newtarefa = newSub.activities[newSub.activities.findIndex(el => el.id === tarefaOpened.t.id)]
            openTarefa(newtarefa, newSub)
        }
    }
})

socket.on('updateEvents', e_l => {
    eventList = e_l
    fillTableCalendar(monthCounter, yearCounter)
    updateWeekColors()
})

socket.on('enableColorCheckedUpdate', newBool => {
    enableColorOnSub.checked = newBool
})


function openTab(tagName){
    if(tagName !== ''){
        const sub = subjectList[subjectList.findIndex(el => el.name === tagName)]
        window.open(`../html/tag.html#${sub.id}`,'_blank')
    }
}

function openTabDirectFromRoot(id){
    window.open(`../html/tag.html#${id}`, '_blank')
}
window.addEventListener('keydown', ({key}) => {
    if (key === 'Escape'){
        popupCreateSub.style.display = 'none'
        subTextInput.value = ''
        subColor.value = randomColor()
        popupCreateRow.style.display = 'none'
        popupEditRow.style.display = 'none'
        popupViewTarefa.style.display = 'none'
        popupCreateEvent.style.display = 'none'
        popupViewEvent.style.display = 'none'
        document.querySelector('#checkbox_div').style.display = 'none'
        popupEditEvent.style.display = 'none'
        popupaddTarefa.style.display = 'none'
        resetInputs()
    }
    if (key === 'Enter' && popupCreateRow.style.display == 'block') {
        addRowToWeekBoard()
    }
    if (key === 'Enter' && popupCreateSub.style.display == 'block') {
        createSub()
    }
    if (key === 'Enter' && popupEditRow.style.display == 'block') {
        updateRowEdited()
    }
    if (key === 'Enter' && popupCreateEvent.style.display == 'block') {
        createEvent()
    }
    if (key === 'Enter' && popupEditEvent.style.display == 'block') {
        updateEventEdited()
    }
    if (key === 'Enter' && popupaddTarefa.style.display == 'block') {
        addTaskToSub()
    }
})

window.addEventListener('mousemove', event => {
    if(event.clientX < 150){
        document.querySelector('.colorChangerText').style.transition = '0.8s'
        document.querySelector('.colorChangerText').style.opacity = '1'
        document.querySelector('.openPopupCreateSubText').style.transition = '0.8s'
        document.querySelector('.openPopupCreateSubText').style.opacity = '1'
        document.querySelector('#hoverButtonOfTagsHow').style.transition = '0.8s'
        document.querySelector('#hoverButtonOfTagsHow').style.opacity = '1'
    }else{
        document.querySelector('.colorChangerText').style.transition = '5s'
        document.querySelector('.colorChangerText').style.opacity = '0'
        document.querySelector('.openPopupCreateSubText').style.transition = '5s'
        document.querySelector('.openPopupCreateSubText').style.opacity = '0'
        document.querySelector('#hoverButtonOfTagsHow').style.transition = '8s'
        document.querySelector('#hoverButtonOfTagsHow').style.opacity = '0'
    }
})



document.querySelector('#hoverButtonOfTagsHow').addEventListener('mouseenter', event => {
    document.querySelector('#tableOfTags').style.transition = '700ms'
    document.querySelector('#tableOfTags').style.opacity = '1'
    document.querySelector('#tableOfTags').style.pointerEvents = 'all'    
})
document.querySelector('#tableOfTags').addEventListener('mouseleave', event => {
    document.querySelector('#tableOfTags').style.transition = '2s'
    document.querySelector('#tableOfTags').style.opacity = '0'
    document.querySelector('#tableOfTags').style.pointerEvents = 'none'    
})

///////////////////0000000000000000000000000000


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

                const add = daysHaveTheSameYearMonthDay(new Date(), new Date(date.year, date.month, date.day))?'background-color:#55990033':''
                
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
    const mappedActivities = subjectList.map( ({activities , id, color}) => {
        return { id, color, tasks : activities}
    })
    calendarDays.forEach(day => {
        const dayDate = new Date(day.getAttribute('value'))
        for (let i in mappedActivities) {
            for (let task of mappedActivities[i].tasks){
                const taskDate = new Date(task.prazoDateFormat)
                if (daysHaveTheSameYearMonthDay(taskDate, dayDate)) {
                    const border = !task.done ? 'box-shadow: 0px 0px 10px 3px #880000; ' : 'box-shadow: 0px 0px 0px 2px green'
                    day.innerHTML += `
                    <div class="pointer disable-select divToHaveColorsChange"  value="${mappedActivities[i].color}"
                    style = "background:${mappedActivities[i].color}; width:30px; height:30px; margin:0px 5px;border-radius:30px;${border}"
                    onclick="openTarefaIDS('${mappedActivities[i].id}','${task.id}')">
                    </div>
                    `
                }
            }
        }
        for( const event of eventList){
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



function openTarefaIDS(subID , taskID){
    const subRequested = subjectList[subjectList.findIndex( el => el.id === subID)]
    const taskRequested = subRequested.activities[subRequested.activities.findIndex(el => el.id === taskID)]
    openTarefa(taskRequested, subRequested)
}



function diffDates(dateOne, dateTwo) {
    if (typeof dateTwo === 'undefined') {
        dateTwo = new Date();
    }
    return Math.ceil((dateOne.getTime() - dateTwo.getTime()) / (1000 * 60 * 60 * 24))
}

// function openTarefa(t , sub) {
    
//     document.querySelector('#sub_title').innerText = sub.name
//     document.querySelector('#popupToChangeColor').style.backgroundColor = sub.color+'33'

//     popupViewTarefa.style.display = 'block'
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
//     document.querySelector('#shoT_Title').style.background = t.done ? 'rgb(174, 255, 255)' : 'rgb(255, 174, 174)'
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
//         if (dif >= 7) {
//             document.querySelector('#shoT_Title').style.background = 'rgb(174, 255, 178)'
//         }
//     }

// }

var tarefaOpened = {t:null,sub:null}

function openTarefa(t, sub){
    tarefaOpened.t = t
    tarefaOpened.sub = sub
    document.querySelector('#checkbox_div').style.display = 'block'
    popupViewEvent.style.display = 'block'

    document.querySelector('#sub_title_2_3').innerText = sub.name
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

    document.querySelector('#checkbox_div').innerHTML = `
        <span onclick="checkUncheckExp('${t.id}','${sub.id}')" class="pointer" id="${t.done ? 'greenes_span' : 'redus_span'}">${t.done ? checkSVG : cancelSGV}</span>
    `
}

/////




const eventColor = document.querySelector('#eventColor')
const eventNameInput = document.querySelector('#eventNameInput')
const eventdescription = document.querySelector('#eventdescription')
const createEventDate = document.querySelector('#createEventDate')

createEventDate.valueAsDate = new Date()

function openAddEventPopup(){
    popupCreateEvent.style.display = 'block'
    eventColor.value = randomColor()
    createEventDate.valueAsDate = new Date()
}


document.querySelector('#createEventSVG').addEventListener('click', createEvent)

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


function createEvent(){
    if (eventNameInput.value !== ''){
        var id = idGenerator(10)
        while (eventList.map(el => el.id).indexOf(id) != -1) {
            id = idGenerator(10)
        }
        const prazoDATE = new Date(createEventDate.value) || new Date()
        const string_date_prazo = `${prazoDATE.getUTCMonth() + 1} ${prazoDATE.getUTCDate()} ${prazoDATE.getUTCFullYear()}`

        
        const newEvent = {
            id: id,
            name: eventNameInput.value,
            description: eventdescription.value,
            color: eventColor.value,
            dateString: putItRight(createEventDate.value),
            date: prazoDATE,
            prazoDateFormat: string_date_prazo,
        }
        socket.emit('createEvent', newEvent)      
        eventNameInput.value = ''  
        eventdescription.value = ''
        popupCreateEvent.style.display = 'none'
    }else{
        window.alert('Você precisa dar um nome para o evento!')
    }
}


var idOfEventToBeChanged = null
const eventColor_edit = document.querySelector('#eventColor_edit')
const eventNameInput_edit = document.querySelector('#eventNameInput_edit')
const eventdescription_edit = document.querySelector('#eventdescription_edit')
const createEventDate_edit = document.querySelector('#createEventDate_edit')

function editEvent(id){
    idOfEventToBeChanged = id
    const eventToEdit = eventList[eventList.findIndex(el => el.id == id)]
    popupEditEvent.style.display = 'block'
    eventColor_edit.value = eventToEdit.color
    eventNameInput_edit.value = eventToEdit.name
    eventdescription_edit.value = eventToEdit.description
    createEventDate_edit.valueAsDate = new Date(eventToEdit.date)
}


function updateEventEdited(){
    const prazoDATE = new Date(createEventDate_edit.value) || new Date()
    const string_date_prazo = `${prazoDATE.getUTCMonth() + 1} ${prazoDATE.getUTCDate()} ${prazoDATE.getUTCFullYear()}`

    const newEvent = {
        id: idOfEventToBeChanged,
        name: eventNameInput_edit.value,
        description: eventdescription_edit.value,
        color: eventColor_edit.value,
        dateString: putItRight(createEventDate_edit.value),
        date: prazoDATE,
        prazoDateFormat: string_date_prazo,
    }
    popupEditEvent.style.display = 'none'
    socket.emit('editEvent', { id: idOfEventToBeChanged,newEvent: newEvent})  
}



socket.on('updateEvents', newEventList => {
    eventList = newEventList
    eventList.sort((a, b) => new Date(a.prazoDateFormat).getTime() - new Date(b.prazoDateFormat).getTime())
    eventsTbody = document.querySelector('#eventsDisplayTableBody')
    eventsTbody.innerHTML = ''
    eventList.forEach(({ id, name, dateString }) => {
        eventsTbody.innerHTML += `
    <tr>
        <td class="text-center pointer" onclick="openEvent('${id}')" style="text-align: center;">
        ${name}
        </td>
        <td class="text-center">
            ${dateString}
        </td>
        <td  style="width:10px">
            <span onclick="deleteEvent('${id}', '${name}')">${garbageSVG}</span>
            <span onclick="editEvent('${id}')">${editSVG}</span>
        </td>
    </tr>
        `
    });
    eventsTbody.innerHTML +=
    `
    <tr>
        <td style="text-align: center;">
            <svg xmlns="http://www.w3.org/2000/svg" onclick="openAddEventPopup()"
                class="addSVGIcon animateSVG" height="35pt" viewBox="0 0 512 512" width="35pt">
                <path
                    d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" />
        </svg>
        </td>
        <td></td>
        <td></td>
    </tr>
    `
})

function deleteEvent(id, name){
    if(window.confirm('Você deseja mesmo deletar o evento ' + name + '?')){
        socket.emit('deleteEvent', id)
    }
}

function openEvent(id){
    document.querySelector('#checkbox_div').style.display = 'none'
    document.querySelector('#sub_title_2_3').innerText = 'Evento'
    document.querySelector('#sub_title_2_3').style.fontSize = '40px'
    const eventReq = eventList[eventList.findIndex( el => el.id === id)]

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
    document.querySelector('#shoT_Hoje_2').innerHTML = 
    `Hoje é dia ${toDayString}, o evento ${eventReq.name} ${dif<0?"aconteceu":dif>0?"acontecerá":"acontece"} dia ${eventReq.dateString}, ${finalString.toLowerCase()}.`
}



function addTaskToSub(){
    if (subIDTOADDTASK != null){
        const toDay = new Date()
        const month = toDay.getMonth() + 1 < 10 ? 0 + (toDay.getMonth() + 1).toString() : toDay.getMonth() + 1
        var day = '0' + toDay.getDate()
        if (day.length == 3) {
            day = day.slice(1)
        } const toDayString = `${day}/${month}/${toDay.getUTCFullYear()}`
        if (tarefaTitleADD.value) {
            var activitiesTotalList = subjectList.map(({ activities }) => activities).flat()
            var id = idGenerator(10)
            while (activitiesTotalList.map(el => el.id).indexOf(id) != -1) {
                id = idGenerator(10)
            }
            const prazoDATE = new Date(tarefaDateADD.value) || new Date()
            const string_date_prazo = `${prazoDATE.getUTCMonth() + 1} ${prazoDATE.getUTCDate()} ${prazoDATE.getUTCFullYear()}`
            const newTarefa =
            {
                id: id,
                tarefa: tarefaTitleADD.value,
                dia: toDayString,
                diaDate: toDay,
                prazo: putItRight(tarefaDateADD.value),
                prazoDate: prazoDATE,
                prazoDateFormat: string_date_prazo,
                descricao: descricaoADD.value,
                done: false
            }
            socket.emit('newTarefa', { newTarefa: newTarefa, hashCode: subIDTOADDTASK })
            tarefaDateADD.valueAsDate = new Date()
            tarefaTitleADD.value = ''
            descricaoADD.value = ''
            popupaddTarefa.style.display = 'none'
        } else {
            window.alert('Qual o nome de sua Tarefa?')
        }
    }
}

function checkUncheckExp(tID,sID){
    socket.emit('checkUncheckExp',{tID,sID})
}

