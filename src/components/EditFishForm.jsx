import React from 'react';

class EditFishForm extends React.Component{
    handelChange = (event) => {
        const updateFish = {...this.props.fish, [event.currentTarget.name]: event.currentTarget.value};
        this.props.updateFish(this.props.index, updateFish);
    }
    
    render(){
        return <div className="fish-edit">
             <input type="text" name="name" onChange={this.handelChange}value={this.props.fish.name} />
                <input type="number" name="price" onChange={this.handelChange}value={this.props.fish.price} />
                <select name="status" onChange={this.handelChange}value={this.props.fish.status}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handelChange}value={this.props.fish.desc} />
                <input type="text" name="image" onChange={this.handelChange}value={this.props.fish.image}/>
                <button onClick={ () => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    }

}

export default EditFishForm;