import React from 'react';
import parse from 'html-react-parser';
import ScriptTag from 'react-script-tag';
import _ from 'lodash';

export default function(html) {
    if (!html) {
        return null;
    }
    return parse(html, {
        replace: (domNode) => {
            if (domNode.type === 'script' || (domNode.name && domNode.name === 'script')) {
                console.log(domNode);
                const attribs = domNode.attribs || {};
                const children = domNode.children || [];
                
                if (!_.isEmpty(children)) {
                    return (
                        <ScriptTag key={Math.random()} {...attribs}>
                            {children.map((child, index) => {
                                if (child.type === 'text') {
                                    return child.data;
                                }
                                return null;
                            }).filter(Boolean).join('')}
                        </ScriptTag>
                    );
                } else {
                    return <ScriptTag key={Math.random()} {...attribs}/>;
                }
            }
        }
    });
};
