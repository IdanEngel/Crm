import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';


class Popup extends Component {

    updateUsers = async (clientId) => {
        return await axios.put(`http://localhost:8000/clients/${clientId}`)
    }

    // async componentDidMount() {
    //     const users = await this.getUsers()
    //     console.log(users)
    //     this.setState({
    //         data: users.data
    //     })
    // }


    render() {
        return (
            <div className={this.props.showPopup ? 'popup' : 'nopop'}>
                <div className="form">
                    <div className="close" onClick={this.props.updatePopup}>
                        <FontAwesomeIcon icon="times-circle" /></div>
                    <label>
                        Name:
                    <input type="text" placeholder="name" />
                    </label>
                    <label>
                        Surname:
                    <input type="text" placeholder="Surname" />
                    </label>
                    <label>
                        Country:
                    <input type="text" placeholder="Country" />
                    </label>
                    <button>Update</button>
                </div>
            </div>
        );
    }
}

export default Popup;