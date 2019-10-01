import React from 'react';
import renderer from 'react-test-renderer';
import ShowBlog from '../ShowBlog/ShowBlog';

test('renders correctly show blog', () => {
    const tree = renderer.create(<ShowBlog />).toJSON();
    expect(tree).toMatchSnapshot();
});
