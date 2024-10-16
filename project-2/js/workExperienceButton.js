let inputCount = 0;

function addWorkField(){
   
    addJob();
    addCompanyName();
    addFromW();
    addToW();
    addLocation();
    addRoleDesc();
    addSplitter();
    console.log('added input field');
}

function removeWorkField(){
    
    removeJob();
    removeCompanyName();
    removeFromW();
    removeToW();
    removeLocation();
    removeRoleDesc();
    removeSplitter();
    console.log('removed input field');
}


function addJob(){
    inputCount++;
    
    const div = document.createElement('div');
    div.classList.add('inputJ-group');
    div.classList.add('form-group');
    div.id = 'inputJ-group-' + inputCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputJ-' + inputCount);
    label.textContent = "Job Title:";

    //create the input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'inputJ-' + inputCount;
    input.name = 'inputJ-' + inputCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form').appendChild(div);
}

function addCompanyName(){
    const div = document.createElement('div');
    div.classList.add('inputCo-group');
    div.classList.add('form-group');
    div.id = 'inputCo-group-' + inputCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputCo-' + inputCount);
    label.textContent = "Company Name:";

    //create the input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'inputCo-' + inputCount;
    input.name = 'inputCo-' + inputCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form').appendChild(div);
}

function addFromW(){
    const div = document.createElement('div');
    div.classList.add('inputF-group');
    div.classList.add('form-group');
    div.id = 'inputF-group-' + inputCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputF-' + inputCount);
    label.textContent = "From:";

    //create the input element
    const input = document.createElement('input');
    input.type = 'date';
    input.id = 'inputF-' + inputCount;
    input.name = 'inputF-' + inputCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form').appendChild(div);
}

function addToW(){
    const div = document.createElement('div');
    div.classList.add('inputToWork-group');
    div.classList.add('form-group');
    div.id = 'inputToWork-group-' + inputCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputToWork-' + inputCount);
    label.textContent = "To:";

    //create the input element
    const input = document.createElement('input');
    input.type = 'date';
    input.id = 'inputToWork-' + inputCount;
    input.name = 'inputToWork-' + inputCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form').appendChild(div);
}

function addLocation(){
    const div = document.createElement('div');
    div.classList.add('inputL-group');
    div.classList.add('form-group');
    div.id = 'inputL-group-' + inputCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputL-' + inputCount);
    label.textContent = "Location:";

    //create the input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'inputL-' + inputCount;
    input.name = 'inputL-' + inputCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form').appendChild(div);
}

function addRoleDesc(){
    const div = document.createElement('div');
    div.classList.add('inputRD-group');
    div.classList.add('form-group');
    div.id = 'inputRD-group-' + inputCount; //set unique id

    //create the label element
    const label = document.createElement('label');
    label.classList.add("form-group");
    label.setAttribute('for', 'inputRD-' + inputCount);
    label.textContent = "Role Description:";

    //create the input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'inputRD-' + inputCount;
    input.name = 'inputRD-' + inputCount;

    //Append the label and input to the div
    div.appendChild(label);
    div.appendChild(input);

    //Append the div to the form
    document.getElementById('dynamic-form').appendChild(div);
}

function addSplitter(){
    const div = document.createElement('div');
    div.classList.add('inputSplitter-group');
    div.classList.add('form-group');
    div.id = 'inputSplitter-group-' + inputCount; //set unique id

    //Append the div to the form
    document.getElementById('dynamic-form').appendChild(div);
}


/* REMOVING FUNCTIONS
----------------------------------------------- */
function removeJob(){
    if(inputCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputJ-group-' + inputCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            
            console.log('removed1');
        }
    
    }
}

function removeCompanyName(){
    if(inputCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputCo-group-' + inputCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            console.log('removed2');
        }
    
    }
}

function removeFromW(){
    if(inputCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputF-group-' + inputCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            console.log('removed3');
        }
    
    }
}

function removeToW(){
    if(inputCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputToWork-group-' + inputCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            console.log('removed4');
        }
    
    }
}

function removeLocation(){
    if(inputCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputL-group-' + inputCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            console.log('removed5');
        }
    
    }
}

function removeRoleDesc(){
    if(inputCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputRD-group-' + inputCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            console.log('removed6');
        }
    
    }
}

function removeSplitter(){
    if(inputCount > 0){
        //Remove the last input group
        const lastInputGroup = document.getElementById('inputSplitter-group-' + inputCount);
        if(lastInputGroup){
            lastInputGroup.remove();
            inputCount--;
            console.log('removed Splitter');
        }
    
    }
}

