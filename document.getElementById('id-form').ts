document.getElementById('id-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const idInput = document.getElementById('id-input');
    const idNumber = idInput.value.trim();
    
    if (idNumber !== '') {
      const age = calculateAge(idNumber);
      if (age !== null) {
        addIdWithAge(idNumber, age);
        idInput.value = '';
      } else {
        alert('Invalid ID number.');
      }
    }
  });
  
  function calculateAge(idNumber) {
    // Assuming the ID number contains the birthdate information
    // You may need to adjust this logic based on the format of the ID number
    // For simplicity, let's assume the format is YYYYMMDD
  
    // Extract birthdate from ID number
    const birthYear = parseInt(idNumber.substr(0, 4));
    const birthMonth = parseInt(idNumber.substr(4, 2));
    const birthDay = parseInt(idNumber.substr(6, 2));
    
    // Calculate current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed
    const currentDay = currentDate.getDate();
    
    // Calculate age
    let age = currentYear - birthYear;
    
    // Adjust age based on birth month and day
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
    
    return age;
  }
  
  function addIdWithAge(idNumber, age) {
    const idList = document.getElementById('id-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>ID: ${idNumber}, Age: ${age}</span>
      <button onclick="removeId(this)">Remove</button>
    `;
    idList.appendChild(listItem);
  }
  
  function removeId(button) {
    const idList = document.getElementById('id-list');
    idList.removeChild(button.parentElement);
  }
  
  