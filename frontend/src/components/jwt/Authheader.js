export default function Authheader() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
      
       return { Authorization: user }; // for Spring Boot back-end
      //return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }