let inputEducationCount = 0;

function addEducation(){
    addSchool();
    addDegree();
    addField();
    addGPA();
    addFrom();
    addTo();
    addSplitterE();
    console.log('added input field');
}

function removeEducation(){
    removeSchool();
    removeDegree();
    removeField();
    removeGPA();
    removeFrom();
    removeTo();
    removeSplitterE();
    console.log('removed input field');
}


function addSchool(){
    inputEducationCount++;
    
    const div = document.createElement('div');
    div.classList.add('inputS-group');
    div.classList.add('form-group');
    div.id = 'inputS-group-' + inputEducationCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputS-' + inputEducationCount);
    label.textContent = "School or University";

    //create the input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'inputS-' + inputEducationCount;
    input.name = 'inputS-' + inputEducationCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form2').appendChild(div);
}

function addDegree(){
    const div = document.createElement('div');
    div.classList.add('inputD-group');
    div.classList.add('form-group');
    div.id = 'inputD-group-' + inputEducationCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputD-' + inputEducationCount);
    label.textContent = "Degree:";

    //create the input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'inputD-' + inputEducationCount;
    input.name = 'inputD-' + inputEducationCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form2').appendChild(div);
}

function addField(){
    const div = document.createElement('div');
    div.classList.add('inputField-group');
    div.classList.add('form-group');
    div.id = 'inputField-group-' + inputEducationCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputField-' + inputEducationCount);
    label.textContent = "Field of Study:";

    //create the input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'inputField-' + inputEducationCount;
    input.name = 'inputField-' + inputEducationCount;
    input.placeholder = 'Economics, Archeology, etc.';

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form2').appendChild(div);
}

function addGPA(){
    const div = document.createElement('div');
    div.classList.add('inputGPA-group');
    div.classList.add('form-group');
    div.id = 'inputGPA-group-' + inputEducationCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputGPA-' + inputEducationCount);
    label.textContent = "Overall GPA:";

    //create the input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'inputGPA-' + inputEducationCount;
    input.name = 'inputGPA-' + inputEducationCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form2').appendChild(div);
}

function addFrom(){
    const div = document.createElement('div');
    div.classList.add('inputFrom-group');
    div.classList.add('form-group');
    div.id = 'inputFrom-group-' + inputEducationCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputFrom-' + inputEducationCount);
    label.textContent = "From:";

    //create the input element
    const input = document.createElement('input');
    input.type = 'date';
    input.id = 'inputFrom-' + inputEducationCount;
    input.name = 'inputFrom-' + inputEducationCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form2').appendChild(div);
}

function addTo(){
    const div = document.createElement('div');
    div.classList.add('inputTo-group');
    div.classList.add('form-group');
    div.id = 'inputTo-group-' + inputEducationCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputTo-' + inputEducationCount);
    label.textContent = "To (Actual or Expected):";

    //create the input element
    const input = document.createElement('input');
    input.type = 'date';
    input.id = 'inputTo-' + inputEducationCount;
    input.name = 'inputTo-' + inputEducationCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form2').appendChild(div);
}

function addSplitterE(){
    const div = document.createElement('div');
    div.classList.add('inputSplitterE-group');
    div.classList.add('form-group');
    div.id = 'inputSplitterE-group-' + inputEducationCount; //set unique id

    //Append the div to the form
    document.getElementById('dynamic-form2').appendChild(div);
}


/* REMOVING FUNCTIONS
----------------------------------------------- */
function removeSchool(){
    if(inputEducationCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputS-group-' + inputEducationCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            
            console.log('removed1');
        }
    
    }
}

function removeDegree(){
    if(inputEducationCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputD-group-' + inputEducationCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            console.log('removed2');
        }
    
    }
}

function removeField(){
    if(inputEducationCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputField-group-' + inputEducationCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            console.log('removed3');
        }
    
    }
}

function removeGPA(){
    if(inputEducationCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputGPA-group-' + inputEducationCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            console.log('removed4');
        }
    
    }
}

function removeFrom(){
    if(inputEducationCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputFrom-group-' + inputEducationCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            console.log('removed5');
        }
    
    }
}

function removeTo(){
    if(inputEducationCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputTo-group-' + inputEducationCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            console.log('removed6');
        }
    
    }
}

function removeSplitterE(){
    if(inputEducationCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputSplitterE-group-' + inputEducationCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            inputEducationCount--;
            console.log('removed Splitter');
        }
    
    }
}