import keycloak from '../keycloak';

function Dashboard() {


const localLogout = () => {
  keycloak.logout({
  redirectUri: window.location.origin + '/logged-out',
});
};

const handleCourseClick = (id: number): void => {
   window.open(`http://13.233.130.50/bitlabs/course/view.php?id=${id}`,'_blank');
}
  return (
    <div>
        <h1>Dashboard</h1>
        <h3>Welcome to dashboard</h3>
        <button onClick={() => handleCourseClick(7)}>HTML Course </button>
         <button onClick={() => handleCourseClick(3)}>Springboot Course </button>
        <button onClick={localLogout}>log out</button>
    </div>
  )
}

export default Dashboard
