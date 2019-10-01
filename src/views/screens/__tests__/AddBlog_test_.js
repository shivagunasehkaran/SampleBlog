import React from 'react';
import renderer from 'react-test-renderer';
import AddBlog from '../AddBlog/AddBlog';

test('renders correctly add blog', () => {
    const tree = renderer.create(<AddBlog />).toJSON();
    expect(tree).toMatchSnapshot();
});
