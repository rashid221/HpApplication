import React,{forwardRef} from 'react';

function ApplicationChild(props,ref) {
    return (
        <div>
            <input ref={ref} type="text"/>
        </div>
    );
}

export default forwardRef(ApplicationChild);