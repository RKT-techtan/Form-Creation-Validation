//(A.). Fetching Data from an API and Displaying It
async function fetchUserData() {
    // 1. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    // 2. Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
  
    // 3. Fetch Data Using try-catch
    try {
      const response = await fetch(apiUrl);
      const users = await response.json();
  
      // 4. Clear the Loading Message
      dataContainer.innerHTML = '';
  
      // 5. Create User List Element
      const userList = document.createElement('ul');
  
      // 6. Loop through users and create list items
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name; // Access user name from the API data
        userList.appendChild(listItem);
      });
  
      // 7. Append the User List to the container
      dataContainer.appendChild(userList);
  
    } catch (error) {
      // 8. Error Handling
      dataContainer.innerHTML = 'Failed to load user data.';
      console.error('Error fetching user data:', error);
    }
  }
  
  // 9. Invoke fetchUserData on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', fetchUserData);