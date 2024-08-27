document.body.style.backgroundColor = '#f0f0f0';



document.body.style.backgroundColor = '#f0f0f0';

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0'; 

const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.height = '500px';
container.style.width = '1000px';



const leftDiv = document.querySelector('.left');
leftDiv.style.backgroundColor = 'white';
leftDiv.style.width = '50%';
leftDiv.style.display = 'flex';
leftDiv.style.flexDirection = 'column';
leftDiv.style.justifyContent = 'center';
leftDiv.style.alignItems = 'center';
leftDiv.style.height = '100%';

const rightDiv = document.querySelector('.right');
rightDiv.style.width = '50%';
rightDiv.style.color = 'white';
rightDiv.style.backgroundColor = 'lightgreen';
rightDiv.style.display = 'flex';
rightDiv.style.flexDirection = 'column';
rightDiv.style.justifyContent = 'center';
rightDiv.style.alignItems = 'center';
rightDiv.style.textAlign = 'center';
rightDiv.style.padding = '20px';


const inputs = document.querySelectorAll('.left input');
inputs.forEach(input => {
  input.style.marginBottom = '10px';
  input.style.width = '400px';
  input.style.height = '25px'; 
  input.style.backgroundColor = 'whitesmoke'; 
  input.style.border = '1px solid #ccc';
  input.style.padding = '10px';
  input.style.borderRadius = '4px'
});


const leftButton = document.querySelector('.left button');
leftButton.style.marginTop = '10px'; 
leftButton.style.width = '430px';
leftButton.style.height = '50px';
leftButton.style.backgroundColor = 'lightgreen'; 
leftButton.style.border = 'none';
leftButton.style.borderRadius = '4px';
leftButton.style.color = 'white';
leftButton.style.cursor = 'pointer'; 
leftButton.style.fontSize = '16px'; 
leftButton.style.fontWeight = 'bold'; 


const rightButton = document.querySelector('.right-button');
rightButton.style.marginTop = '10px';
rightButton.style.width = '300px';
rightButton.style.height = '45px'; 
rightButton.style.backgroundColor = 'lightgreen';
rightButton.style.border = '2px solid white'; 
rightButton.style.borderRadius = '23px'; 
rightButton.style.color = 'white';
rightButton.style.cursor = 'pointer'; 
rightButton.style.fontSize = '16px'; 
rightButton.style.fontWeight = 'bold';

const socialIcons = document.querySelector('.social-icons');
socialIcons.style.display = 'flex'; 
socialIcons.style.gap = '10px';
socialIcons.style.marginTop = '20px'; 

const icons = socialIcons.querySelectorAll('i');
icons.forEach(icon => {
  icon.style.fontSize = '28px'; 
});