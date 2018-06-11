import React from 'react';
import AddFishForm from "./AddFIshForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component{
    render(){
        console.log(this.props.fishes)
        return(
            <div>
                <div className="inventory">
                    {Object.keys(this.props.fishes).map(key =>{
                        return <EditFishForm key={key} index={key} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish} fish={this.props.fishes[key]} />
                    })}
                    <AddFishForm addFish={this.props.addFish} />
                    <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
                </div>
            </div>
        )
    }
}

export default Inventory ;  