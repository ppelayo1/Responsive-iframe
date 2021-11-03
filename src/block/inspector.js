const { InspectorControls,InspectorAdvancedControls} = wp.blockEditor;
const { Component } = wp.element;
const { Panel,PanelBody, TextControl, CheckboxControl,RangeControl} = wp.components;



export default class Inspector extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        let {attributes,setAttributes} = this.props;
        
        return(
            <InspectorControls>
                <Panel>
                    <PanelBody title='Iframe Settings'>
                        <TextControl 
                            label ='Site Address'
                            value = {attributes.iFrameURL}
                            onChange= {(val)=>{setAttributes({iFrameURL:val});}}
                        />
                        <RangeControl 
                            label ='Site Width'
                            min={0}
                            max={3000}
                            value = {attributes.iFrameWidth}
                            onChange= {(val)=>{setAttributes({iFrameWidth:val});}}
                        />
                        <RangeControl 
                            label ='Site Height'
                            min={0}
                            max={3000}
                            value = {attributes.iFrameHeight}
                            onChange= {(val)=>{setAttributes({iFrameHeight:val});}}
                        />
                        <div className={RESPONSIVE_IFRAME_CONSTANTS.CHK_BX_CLASS}>
                            <CheckboxControl
                                label = 'Scroll Bar'
                                checked = {attributes.scrollBarChecked}
                                onChange = {()=>{setAttributes({scrollBarChecked:!attributes.scrollBarChecked});}}
                            />
                            <CheckboxControl
                                label = 'Border'
                                checked = {attributes.borderChecked}
                                onChange = {()=>{setAttributes({borderChecked:!attributes.borderChecked});}}
                            />
                        </div>

                        <RangeControl
                            label={!attributes.useMaxWidth ? "Scale" : "Scale (Disabled by Advanced Setting MAX WIDTH)"}
                            disabled={attributes.useMaxWidth}
                            min={1}
                            max={100}
                            value = {attributes.wrapperWidth}
                            onChange= {(val)=>{setAttributes({wrapperWidth:val});}}
                        />  
                    </PanelBody>
                    <InspectorAdvancedControls>
                    <CheckboxControl
                                label = 'UseMaxWidth(This will disable scaling)'
                                checked = {attributes.useMaxWidth}
                                onChange = {()=>{setAttributes({useMaxWidth:!attributes.useMaxWidth});}}
                            />
					<RangeControl
                        disabled={!attributes.useMaxWidth}
                        label="Max-Width"
                        min={1}
                        max={3000}
                        value = {attributes.maxWidth}
                        onChange= {(val)=>{setAttributes({maxWidth:val});}}
                    />  
				</InspectorAdvancedControls>
                </Panel>
            </InspectorControls>
        )
    }
            
}