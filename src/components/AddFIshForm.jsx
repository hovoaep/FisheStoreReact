import React from 'react';

class AddFishForm extends React.Component{
    nameRef     = React.createRef();
    priceRef    = React.createRef();
    statusRef   = React.createRef();
    descRef     = React.createRef();
    imageRef    = React.createRef();
    createFish  = event => {
        event.preventDefault();
        const fish = {
            name:   this.nameRef.value.value,
            price:  parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc:   this.descRef.value.value,
            image:  this.imageRef.value.value

        }
        this.props.addFish(fish);
        event.currentTarget.reset();
    }
    render(){
        return(
            <div>
                <form className="fish-edit" onSubmit={this.createFish}>
                    <input type="text" ref={this.nameRef} name="name" placeholder="Name" />
                    <input type="number" ref={this.priceRef} name="price" placeholder="Price" />
                    <select name="status" ref={this.statusRef}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Fresh!</option>
                    </select>
                    <textarea name="desc" placeholder="Desc" ref={this.descRef} />
                    <input type="text" name="image" placeholder="Image" ref={this.imageRef} />
                    <button type="submit">+ Add Fish</button>
                </form>
            </div>
        )
    }
}

export default AddFishForm ;