import React from 'react'

const e = React.createElement

export const componentFromProps = (defaultTag = 'div') => ({ element = defaultTag, children, ...props }) => e(element, props, children)
