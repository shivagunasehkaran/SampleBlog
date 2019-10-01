import React from 'react';
import renderer from 'react-test-renderer';
import EditBlog from '../EditBlog/EditBlog';

test('renders correctly edit blog', () => {
    const tree = renderer.create(<EditBlog />).toJSON();
    expect(tree).toMatchSnapshot();
});
