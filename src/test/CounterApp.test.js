import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import React from 'react';
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp />', () => {
   let wrapper = shallow(<CounterApp />);

   beforeEach(() => {
      wrapper = shallow(<CounterApp />);
   });
   test('Renderizar componente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Renderizar componente con valor de 123', () => {
      const valor = 123;
      const wrapper = shallow(<CounterApp value={valor} />);
      const counter = wrapper.find('h2').text();
      expect(counter).toBe('123');
   });


   test('should boton add', () => {
      wrapper.find('#add').simulate('click');
      const counter = wrapper.find('h2').text();
      expect(counter).toBe('11');
   })
   test('should boton subs', () => {
      wrapper.find('#subs').simulate('click');
      const counter = wrapper.find('h2').text();
      expect(counter).toBe('9');
   })
   test('should boton reset', () => {
      const valor = 123;
      const wrapper = shallow(<CounterApp value={valor} />);
      wrapper.find('#add').simulate('click');
      wrapper.find('#reset').simulate('click');
      const counter = wrapper.find('h2').text();
      expect(counter).toBe('123');
   })
});