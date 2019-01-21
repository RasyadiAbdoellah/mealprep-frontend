import React from 'react';
import { RecipeForm } from '.';

export default class RecipeEntry extends React.Component{
    constructor(props){
        super()
        this.state = {
            isEditing: false
        }
    }

    toggleEdit = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    render(){
        const { recipe } = this.props
        let output
        if(!this.state.isEditing){
            output = (
                <React.Fragment>
                    <button onClick={this.toggleEdit}> Edit </button>
                    <p>Name:{recipe.name}</p>
                    <p>ID: {recipe.id}</p>
                </React.Fragment>
            )
        } else {
            output = (
                <React.Fragment>
                    <button onClick={this.toggleEdit}> Edit </button>
                    <RecipeForm id={recipe.id} />
                </React.Fragment>
            )
        }
        return (
            <li key={recipe.id}>
                {output}
            </li>
        )
    }
}