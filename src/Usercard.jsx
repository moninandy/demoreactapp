import PropTypes from"prop-types";
const userData=[
    {
        name:"James",
        city:"New York",
        Description:"Front-end Developer",
        skills:["UI/UX","Front End Development","Html","Css","JavaScript","React"],
        online:false,
        profile:"images/img1.jpg",
        


    },
    {
        name:"James",
        city:"New York",
        Description:"Front-end Developer",
        skills:["UI/UX","Front End Development","Html","Css","JavaScript","React"],
        online:false,
        profile:"images/img2.jpg",
        


    },
    {
        name:"James",
        city:"New York",
        Description:"Front-end Developer",
        skills:["UI/UX","Front End Development","Html","Css","JavaScript","React"],
        online:false,
        profile:"images/img2.jpg",
        


    },
    {
        name:"James",
        city:"New York",
        Description:"Front-end Developer",
        skills:["UI/UX","Front End Development","Html","Css","JavaScript","React"],
        profile:"images/img2.jpg",
        online:true


    },
    {
        name:"James",
        city:"New York",
        Description:"Front-end Developer",
        skills:["UI/UX","Front End Development","Html","Css","JavaScript","React"],
        profile:"images/img3.jpg",
        online:true


    }
];




function User(props){
return <div className="card-container">
<span className={props.online?"pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
<img src={props.profile} className="img" alt="user1"/>
<h3>{props.name}</h3>
<h3>{props.city}</h3>
<p>{props.description}</p>
<div className="buttons">
    <button className="primary">Messages</button>
    <button className="primary outline">Following</button>
</div>
<div className="skills">
    <h6>Skills</h6>
    <ul>{props.skills.map((skill,index)=>(
        <li key={index}>{skill}</li>
    ))}</ul>

</div>
</div>
}
export const Usercard = () => {
  return ( //<User name="Arun"city="New York" description="FrontEnd-Developer" skills={["UI /UX","Front End Developement","HTML","CSS","Javascript","React",
//   "Node"]} online={false} profile="images/img2.jpg"/>
<>
{userData.map((user,index)=>(
        <User key={index}
            name={user.name} 
            city={user.city} 
            Description={user.Description}
            online={user.online}
            profile={user.profile}
            skills={user.skills}/>
 ))}


</>
  )
}
User.propTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    Description:PropTypes.string.isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired
}