import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import utils from '../../../utils';

const IconButton = ({style, source, ...otherProps}) => {
    return (
        <TouchableOpacity
            style={utils.style.combine({justifyContent: 'center', alignItems: 'center'}, style)}
            {...otherProps}
        >
            <Image
                source={source}
            />
        </TouchableOpacity>
    );
};

export default IconButton;

