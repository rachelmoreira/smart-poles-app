'use strict';

import React, { Component } from 'react';

import {
    View,
    TextInput,
    Switch
} from 'react-native';

import ModalSelector from 'react-native-modal-selector'

class SampleApp extends Component {

    constructor() {
        super();

        this.state = {
            textInputValue: ''
        }
    }

    render() {
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Fruits' },
            { key: index++, label: 'Red Apples' },
            { key: index++, label: 'Cherries' },
            { key: index++, label: 'Cranberries' },
            { key: index++, label: 'Pink Grapefruit' },
            { key: index++, label: 'Raspberries' },
            { key: index++, section: true, label: 'Vegetables' },
            { key: index++, label: 'Beets' },
            { key: index++, label: 'Red Peppers' },
            { key: index++, label: 'Radishes' },
            { key: index++, label: 'Radicchio' },
            { key: index++, label: 'Red Onions' },
            { key: index++, label: 'Red Potatoes' },
            { key: index++, label: 'Rhubarb' },
            { key: index++, label: 'Tomatoes' }
        ];

        return (
            <View style={{ flex: 1, justifyContent: 'space-around', padding: 50 }}>

                { /* Default mode: a clickable button will re rendered */ }
                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    onChange={option => { alert(`${option.label} (${option.key}) nom nom nom`) }} />

                { /*
                    Wrapper mode: just wrap your existing component with ModalSelector.
                    When the user clicks on your element, the modal selector is shown.
                 */ }
                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    onChange={option => { this.setState({textInputValue:option.label}) }}>

                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
                        editable={false}
                        placeholder="Select something yummy!"
                        value={this.state.textInputValue} />

                </ModalSelector>

                { /*
                    Custom mode: you have to provide a react-native component that have to
                    control how the selector should open (and for this you need a ref to the modal)
                 */ }
                <ModalSelector
                    data={data}
                    ref={selector => { this.selector = selector; }}
                    customSelector={
                        <Switch
                            style={{ alignSelf: 'center' }}
                            onValueChange={() => this.selector.open()}
                        />
                    }
                />
            </View>
        );
    }
}

export default SampleApp;