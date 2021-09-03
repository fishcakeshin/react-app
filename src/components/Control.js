import React, { Component } from 'react';
class Control extends Component {
    render() {
        console.log('Control Render');
        return (
            <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>create</a></li>
                <li><a href="/update" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a></li>
                <li><a href="/delete" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)}>delete</a></li>
            </ul>
        );
    }
}

export default Control;