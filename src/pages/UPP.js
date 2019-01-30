
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './UPP.css';
import axios from 'axios';
import Image from "react-graceful-image";

class UserImages extends React.Component {
    state = {
        images: [],
        isLoaded: false,
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        axios({
                method: 'get',
                url: `https://insta.nextacademy.com/api/v1/images?userId=${id}`
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
            <div>
                <h1 className="text-center">User Page</h1>
                <ul>
                    {this.state.images.map((picture, index) =>
                        <li key={index}>
                            <Image
                                className="img-thumbnail"
                                src={picture}
                                alt={picture}
                                width="300"
                                height="300"
                            />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default UserImages;