//attribute set
const attributes = 
    {iFrameURL:{
        type:'string',
        default: (window.location.href).match(RESPONSIVE_IFRAME_CONSTANTS.URL_REGEX)[0] //regular expression to get the local website address to display an example
    },
    iFrameWidth:{
        type:'number',
        default:1000
    },
    iFrameHeight:{
        type:'number',
        default:600
    },
    wrapperWidth:{
        type:'number',
        default:100
    },
    scrollBarChecked:{
        type:'boolean',
        default:true
    },
    borderChecked:{
        type:'boolean',
        default:true   
    },
    id:{
        type:'string'
    },
    wrapperClass:{
        type:'string',
        default:RESPONSIVE_IFRAME_CONSTANTS.WRAPPER_CLASS_NAME //wrapped around the iframe element, includes some basic formating founbd in style.scss
    },
    useMaxWidth:{
        type:'boolean',
        default:false
    },
    maxWidth:{
        type:'number',
        default:2000
    },
    breakPoints:{
        type:'array',
        default:[]
    }
};

export default attributes;