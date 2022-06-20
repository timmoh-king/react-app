/**
 * @Author: Your name
 * @Date:   2022-06-15 09:23:06
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-19 17:58:19
 */
import './App.css';
import UserDashbordNavbar from "./components/common/UserDashbordNavbar";
import Card from "./components/common/Card";
import Homepage from "./components/common/Homepage";
import Subscribe from './components/common/Subscribe';

function App() {
 
  return (
    <div className="App">
      <UserDashbordNavbar />
      <Homepage />
      <Subscribe />
      <div className="container d-flex inline-flex py-4">
        <Card link="https://media.istockphoto.com/vectors/young-male-character-writing-code-on-a-desktop-computer-working-from-vector-id1219473617?k=20&m=1219473617&s=612x612&w=0&h=A8e5lzJhIqWCzzY9oK0QplPYDICDnfApKpSkcBEzEhE=" name = "Software Developer"/>
        <Card link="https://previews.123rf.com/images/ntlstudio/ntlstudio1909/ntlstudio190900406/130447137-programmer-coder-flat-vector-illustration-software-engineer-professional-developer-isolated-cartoon-.jpg" name="Data Science" />
        <Card link="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/96701e99535677.5ef4c71eb11ca.jpg" name="Software Engineer" />
      </div>
    </div>
  );
}

export default App;
