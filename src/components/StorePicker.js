import React from "react";
import { getFunName } from "../helpers"

class StorePicker extends React.Component{
    myInput = React.createRef();
    goStore = event => {
        event.preventDefault()
        const storeName = this.myInput.value.value;
        console.log(storeName)
        this.props.history.push(`/store/${storeName}`)
    }
    render(){
        return (
            <form className="store-selector" onSubmit={this.goStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" require ref={this.myInput} placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit Store</button>
                
            </form>
        )  
    }   

}

export default StorePicker