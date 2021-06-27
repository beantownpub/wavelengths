import React from 'react';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faStar,
    faUsers,
    faCoffee,
    faCouch,
    faPen,
    faPaintBrush,
    faComment,
    faInfo,
    faHome,
    faCamera,
    faEnvelope,
    faCalendar,
    faHatCowboy,
    faLock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function getIcon(icon) {
    let icons = {
        "faStar": faStar,
        "faUsers": faUsers,
        "faCouch": faCouch,
        "faPen": faPen,
        "faPaintBrush": faPaintBrush,
        "faComment": faComment,
        "faInfo": faInfo,
        "faCamera": faCamera,
        "faHome": faHome,
        "faEnvelope": faEnvelope,
        "faCalendar": faCalendar,
        "faFacebook": faFacebook,
        "faInstagram": faInstagram,
        "faTwitter": faTwitter,
        "faLinkedin": faLinkedin,
        "faCoffee": faCoffee,
        "faGithub": faGithub,
        "faHatCowboy": faHatCowboy,
        "faLock": faLock
    }
    let Icon = icons[icon]
    return Icon
}

export default class MenuIcon extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <FontAwesomeIcon icon={this.props.name} style={this.props.style} fixedWidth />
		)
    }
}