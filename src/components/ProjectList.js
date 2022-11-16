import React from "react";

class ProjectList extends React.Component {
    
    render() {
        const {projects} = this.props;
        console.log(projects);
        let i = 0;        
        return (
            <div className="container">
                {projects.map((item) => <img className="card" src={item.img} alt={item.category} key={i++}/>)}
            </div>    
        )
    }        
}


export default ProjectList;