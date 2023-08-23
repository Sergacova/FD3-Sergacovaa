"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';



test('работа кнопки "Все" MobileCompany', ()=>{
  let companyName='Velcom';
  let clientsArr=[ 
  {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
  {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
  {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:-180},
  {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220},
];
  const component = renderer.create(
        <MobileCompany name={companyName} clients={clientsArr} />
  ); 
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  const buttonElem = component.root.find( el => el.props.value=='Все');   
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});

test('работа кнопки "Заблокированные" MobileCompany', ()=>{
  let companyName='Velcom';
  let clientsArr=[ 
  {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
  {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
  {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:-180},
  {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220},
];
  const component = renderer.create(
        <MobileCompany name={companyName} clients={clientsArr} />
  ); 
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  const buttonElem = component.root.find( el => el.props.value=='Заблокированные');   
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});
test('работа кнопки "Активные" MobileCompany', ()=>{
  let companyName='Velcom';
  let clientsArr=[ 
  {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
  {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
  {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:-180},
  {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220},
];
  const component = renderer.create(
        <MobileCompany name={companyName} clients={clientsArr} />
  ); 
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  const buttonElem = component.root.find( el => el.props.value=='Активные');   
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});
test('работа кнопки "Добавить клиента" MobileCompany', ()=>{
  let companyName='Velcom';
  let clientsArr=[ 
  {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
  {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
  {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:-180},
  {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220},
];
  const component = renderer.create(
        <MobileCompany name={companyName} clients={clientsArr} />
  ); 
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  const buttonElem = component.root.find( el => el.props.value=='Добавить клиента');   
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  buttonElem.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});
