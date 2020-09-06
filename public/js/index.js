const socket = io.connect('http://localhost:3000/');
//https://mandrak.herokuapp.com/
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


const enableColorOnSub = document.querySelector('#mytoggle')
enableColorOnSub.addEventListener('input', () => {
    updateWeekColors()
    socket.emit('updateEnableColorOnSub', enableColorOnSub.checked)
})



const colorInput = document.querySelector('#colorBackground')
colorInput.addEventListener('input', () => {    
    socket.emit('colorChange', colorInput.value)
})



const popupCreateRow = document.querySelector('#popup-wraper-createRow')
function addRowToWeekBoardOpenPopup(){
    popupCreateRow.style.display = 'block'   
}
popupCreateRow.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupCreateRow.style.display = 'none'
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
            window.alert('Esta matéria já existe')
        }
    }else{
        window.alert('Escreva o nome da matéria')
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
        socket.emit('deleteSub', selectSubDayDelete.value)
        popupCreateSub.style.display = 'none'
    }
}

const popupEditRow = document.querySelector('#popup-wraper-editRow')
popupEditRow.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupEditRow.style.display = 'none'
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
            const htmlOBJ = document.querySelector(`#subId_${id}`)
            if (htmlOBJ){
                htmlOBJ.style.backgroundColor = color
            }
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
            const htmlOBJ = document.querySelector(`#subId_${id}`)
            if (htmlOBJ) {
                htmlOBJ.style.backgroundColor = 'white'
            }
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
        return undefined
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
    setTimeout(updateWeekColors(),1000)  
    setTimeout(updateTaskPorcentageBar(), 500)
})

socket.on('updateColorChecked', val => {
    enableColorOnSub.checked = val
})

socket.on('updateSubjects', list => {
    subjectList = list
    const listOfSelectors = [...document.querySelectorAll('.selectSubDay')]
    for (let selector of listOfSelectors) {
        selector.innerHTML = '<option value="">Matéria</option>'
        
        subjectList.forEach( ({name}) => {
            selector.innerHTML +=`<option value="${name}">${name}</option>`
        })
    }
    const tagsSpace = document.querySelector('#tagsSpace')
    tagsSpace.innerHTML = ''
    subjectList.forEach(({name, id}) => {
        tagsSpace.innerHTML += `
        <tr>
            <td class="pointer" id="subId_${id}" onclick="openTabDirectFromRoot('${id}')">
                ${name}
            </td>
        </tr>
        `
    })   

    setTimeout(updateWeekColors(), 100)
    setTimeout(updateTaskPorcentageBar(), 100)
    document.querySelector('#hoverButtonOfTagsHow').style.height = `${document.querySelector('#tableOfTags').offsetHeight - 2}px`

    fillTableCalendar(monthCounter, yearCounter)
})

socket.on('enableColorCheckedUpdate', newBool => {
    enableColorOnSub.checked = newBool
})


function openTab(tagName){
    if(tagName !== ''){
        const sub = subjectList[subjectList.findIndex(el => el.name === tagName)]
        window.open(`../html/materia.html#${sub.id}`,'_blank')
    }
}

function openTabDirectFromRoot(id){
    window.open(`../html/materia.html#${id}`, '_blank')
}
window.addEventListener('keydown', ({key}) => {
    if (key === 'Escape'){
        popupCreateSub.style.display = 'none'
        subTextInput.value = ''
        subColor.value = randomColor()
        popupCreateRow.style.display = 'none'
        popupEditRow.style.display = 'none'
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
                tableRowsList[counterTableRowIndex].innerHTML += `
                <td class="calendar-day disable-select day text-center ${(date.siblingMonth ? ' -sibling-month' : '')}">
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
                    <div class="pointer disable-select" 
                    style = "background:${mappedActivities[i].color}; width:30px; height:30px; margin:0px 5px;border-radius:30px;${border}"
                    onclick="openTarefaIDS('${mappedActivities[i].id}','${task.id}')">
                    </div>
                    `
                }
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

const popupViewTarefa = document.querySelector('#popup-viewTarefa')
popupViewTarefa.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    if (shouldClosePopup) {
        popupViewTarefa.style.display = 'none'
    }
})

function diffDates(dateOne, dateTwo) {
    if (typeof dateTwo === 'undefined') {
        dateTwo = new Date();
    }
    return Math.ceil((dateOne.getTime() - dateTwo.getTime()) / (1000 * 60 * 60 * 24))
}

function openTarefa(t , sub) {
    
    document.querySelector('#sub_title').innerText = sub.name
    document.querySelector('#popupToChangeColor').style.backgroundColor = sub.color+'33'

    popupViewTarefa.style.display = 'block'
    document.querySelector('#shoT_Title').innerText = t.tarefa
    document.querySelector('#shoT_Descricao').innerText = t.descricao
    document.querySelector('#shoT_Prazo').innerText = `Prazo ${t.prazo}`
    document.querySelector('#shoT_Dia').innerText = `Dia ${t.dia}`


    const toDay = new Date()
    const month = toDay.getMonth() + 1 < 10 ? 0 + (toDay.getMonth() + 1).toString() : toDay.getMonth() + 1
    const day = toDay.getDate() + 1 < 10 ? 0 + (toDay.getDate()).toString() : toDay.getDate()
    const toDayString = `${day}/${month}/${toDay.getUTCFullYear()}`

    document.querySelector('#shoT_Hoje').innerText = `Hoje ${toDayString}`
    const dif = diffDates(new Date(t.prazoDate), toDay)
    document.querySelector('#shoT_Title').style.background = t.done ? 'rgb(174, 255, 178)' : 'rgb(255, 174, 174)'
    document.querySelector('#shoT_TempoRestante').style.background = t.done ? 'rgb(174, 255, 178)' : 'rgb(255, 174, 174)'
    if (dif < 0) {
        if (Math.abs(dif) == 1) {
            document.querySelector('#shoT_TempoRestante').innerText = `Já se passou um dia`
        } else {
            document.querySelector('#shoT_TempoRestante').innerText = `Já se passaram ${Math.abs(dif)} dias`
        }

    } else {
        if (Math.abs(dif) == 1) {
            document.querySelector('#shoT_TempoRestante').innerText = `Resta um dia`
        } else if (dif == 0) {
            document.querySelector('#shoT_TempoRestante').innerText = `Hoje é o prazo`
        } else {
            document.querySelector('#shoT_TempoRestante').innerText = `Restam ${Math.abs(dif)} dias`
        }
        document.querySelector('#shoT_Title').style.background = t.done ? 'rgb(174, 255, 178)' : 'rgb(255, 247, 174)'
        document.querySelector('#shoT_TempoRestante').style.background = t.done ? 'rgb(174, 255, 178)' : 'rgb(255, 247, 174)'
        if (dif >= 7) {
            document.querySelector('#shoT_Title').style.background = 'rgb(174, 255, 178)'
        }
    }

}