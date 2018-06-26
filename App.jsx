import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "id":1,
                        "name":"Foo",
                        "age":"20"
                    },
                    {
                        "id":2,
                        "name":"Bar",
                        "age":"30"
                    },
                    {
                        "id":3,
                        "name":"Baz",
                        "age":"40"
                    }
                ]
        }
    }
    render() {
        return (
            <div>
                <Header/>
                    {this.state.data.map((person, i) => <Content key = {i} data = {person} />)}
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td>{this.props.data.id}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.age}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}
export default App;