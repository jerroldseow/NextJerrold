import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Userimages.css';
import Image from "react-graceful-image";

class UserImages extends React.Component {
    state = {
        images: [],
        isLoaded: false,
    }

    componentDidMount() {
        axios({
                method: 'get',
                url: `https://insta.nextacademy.com/api/v1/images?userId=${this.props.userId}`
            })
            .then(images => {
                // console.log(images.data)
                this.setState({
                    images: images.data,
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        return (
            <ul>
                {this.state.images.map((user, index) =>
                    <li key={index}>
                        {/* <img className="img-thumbnail" src={user} alt={user} /> */}
                        <Image
                            className="img-thumbnail"
                            src={user}
                            alt={user}
                            width="100"
                            height="100"
                        />
                    </li>
                )}
            </ul>
        )
    }
}

export default UserImages;