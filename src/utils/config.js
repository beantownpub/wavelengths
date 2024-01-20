const CONFIG = {
    "urls": {
        "googleApi": "https://maps.googleapis.com/maps/api/",
        "facebook": "https://www.facebook.com/WavelengthsBrookline/"
    },
    "colors": {
        "backgroundGray": "#F3F4F4",
        "yellow": "#fcba03",
        "gray": "#494040",
        "red": "#c70039",
        "navBarBlue": "rgba(5,46,102,0.90)",
        "blue": "#1e90ff",
        "lightGray": "#F3F4F4",
        "darkGray": "#888888",
        "cyan": "#3fc5f0",
        "black": "#000000",
        "white": "#ffffff",
        "green": "#85f020"
    },
    "fonts": {
        "content": "'Lato', sans-serif",
        "footer": "'Raleway', Arial, sans-serif",
        "headline": "'Poppins', sans-sefif",
        "script": "'Satisfy', cursive;"
    },
    "pages": {
        "index": {
            "name": "index.html",
            "icon": "faCoffee",
            "text": "Home",
            "title": "Wavelengths Hair Salon",
            "keywords": "",
            "description": "",
            "menu_list": true,
            "top_menu": false,
            "metadata": {
                "title": "Wavelenghts Salon",
                "description": "Wavelenghts Salon, Brookline Massachusetts full service hair salon. Appointments and walk ins welcome",
                "keywords": "hair salon, hair cut, full service"
            }
        },
        "contact": {
            "name": "contact",
            "icon": "faEnvelope",
            "text": "Contact",
            "title": "Contact Wavelenghts",
            "keywords": "",
            "description": "Contact information for Wavelengths Salon",
            "menu_list": true,
            "top_menu": true,
            "metadata": {
                "title": "Contact Wavelenghts",
                "description": "",
                "keywords": ""
            }
        },
        "facebook": {
            "name": "https://www.facebook.com/WavelengthsBrookline/",
            "icon": "faFacebook",
            "text": "Facebook",
            "title": "",
            "keywords": "",
            "description": "",
            "menu_list": true,
            "top_menu": true
        }
    },
    "sections": {
        "home": {
            "template": "index",
            "metadata": {
                "title": "Wavelenghts Salon",
                "description": "Wavelenghts Salon, Brookline Massachusetts full service hair salon. Appointments and walk ins welcome",
                "keywords": "hair salon, hair cut, full service"
            }
        },
        "contact": {
            "template": "contact",
            "metadata": {
                "title": "Contact Wavelenghts",
                "description": "",
                "keywords": ""
            }
        }
    }
}

export default CONFIG
