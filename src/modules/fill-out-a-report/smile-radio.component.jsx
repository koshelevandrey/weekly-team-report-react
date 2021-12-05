import React from 'react';
import PropTypes from 'prop-types';

import {ExtensibleSmile} from '../common/components/pictures/smile.component';

export function RadioSmile({valueText, valueLevel, inputName}){
return(
    <div className="col">
        <label>
            <input type="radio" name={inputName} value={valueLevel} />
            <div className="card smile-card mx-auto justify-content-between align-items-center p-3">
                <ExtensibleSmile
                    smileNumber={valueLevel}
                    additionalClasses={"smile-icon mx-auto"}
                />
                <p>{valueText}</p>
            </div>
        </label>
    </div>
);
};

RadioSmile.propTypes ={
    inputName: PropTypes.string,
    valueText: PropTypes.string,
    valueLevel: PropTypes.number
};