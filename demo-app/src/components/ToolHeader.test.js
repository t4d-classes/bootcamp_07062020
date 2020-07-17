import * as React from 'react';
import { render, mount, shallow } from 'enzyme';

import { ToolHeader } from './ToolHeader';

describe('<ToolHeader /> Enzyme Static HTML', () => {

  test('<ToolHeader /> renders', () => {
    
    const component = JSON.stringify(render(
      <ToolHeader />
    ).html());
    
    expect(component).toMatchSnapshot();
  });

});

describe('<ToolHeader /> Enzyme Mock DOM', () => {

  let component;
  let componentDOMNode;

  beforeEach(() => {
    component = mount(<ToolHeader />);
    componentDOMNode = component.find('h1');
  });

  test('<ToolHeader /> renders', () => {
    expect(componentDOMNode.text()).toBe('The Tool');
  });

});

describe('<ToolHeader /> Shallow with Enzyme', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ToolHeader />);
  });

  test('<ToolHeader /> renders', () => {
    const h1Content = wrapper.find('h1').text();
    expect(h1Content).toBe('The Tool');
  });

});
