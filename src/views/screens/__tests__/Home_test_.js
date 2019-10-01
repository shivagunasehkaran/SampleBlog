import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home/Home';

test('renders correctly home', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
});
