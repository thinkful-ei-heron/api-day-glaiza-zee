import shoppingList from './shopping-list';
import $ from 'jquery';
import './index.css';
import 'normalize.css';

const main = function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
