import attributes from "../../js/attributes"
const { Fragment } = wp.element;

const v1_1_1 = {
    attributes,
    save: ( props ) => {
        //initiate reference
        let {attributes} = props;
        
        //additional attributes
        let scrollBar = attributes.scrollBarChecked ? 'yes' : 'no';
        let border = attributes.borderChecked ? {} : {border:'none'};
        let maxWidth = attributes.wrapperWidth ? {maxWidth:attributes.wrapperWidth + '%'} : {};
        let center = {marginLeft:'auto',marginRight:'auto'};
        let className = attributes.className ? attributes.wrapperClass + ' ' + attributes.className : attributes.wrapperClass;
        
        //user using advanced settings to specify max-width of iframe
        if(attributes.useMaxWidth){
            maxWidth = {maxWidth:attributes.maxWidth + "px"};
        }
        //style for the wrapper
        let style = Object.assign(center,maxWidth);
        
        //The block holds data attributes for the actual width and height of the iframe
        let block = <iframe style={border} id={attributes.id} className={RESPONSIVE_IFRAME_CONSTANTS.CLASS_NAME} data-width-iframe={attributes.iFrameWidth} data-height-iframe={attributes.iFrameHeight} scrolling={scrollBar} src={attributes.iFrameURL}></iframe> 
    
        return (
            <Fragment>
                <div style={style} className={className}>
                    {block}
                </div>
            </Fragment>
        );
    },
};

export default v1_1_1;