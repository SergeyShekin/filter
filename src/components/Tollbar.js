import React from "react";

class Toolbar extends React.Component {

    render() {
        const {filters, selected} = this.props;
        const selectFilter = (item) => this.props.selectFilter(item);
        let i = 0;
        return (
            <div className="toolbar">
                {filters.map((item) => <button className="buttonFilter" onClick={(item) => {selectFilter(item)}} key={i++}>{item}</button>)}    
            </div>        
        )
    }        
}


export default Toolbar;