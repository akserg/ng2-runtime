System.registerDynamic("src/rt.component", ["angular2/core", "angular2/common", "./rt.component.factory"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var rt_component_factory_1 = $__require('./rt.component.factory');
  var RuntimeComponent = (function() {
    function RuntimeComponent(factory) {
      this.factory = factory;
    }
    RuntimeComponent = __decorate([core_1.Component({
      selector: 'ng2-runtime',
      directives: [common_1.CORE_DIRECTIVES],
      template: '<div></div>'
    }), __metadata('design:paramtypes', [rt_component_factory_1.RuntimeComponentFactory])], RuntimeComponent);
    return RuntimeComponent;
  })();
  exports.RuntimeComponent = RuntimeComponent;
  return module.exports;
});

System.registerDynamic("src/rt.component.factory", ["angular2/core"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var matchKey = (function() {
    var elem = document.documentElement;
    if (elem.matches)
      return 'matches';
    else if (elem.webkitMatchesSelector)
      return 'webkitMatchesSelector';
    else if (elem.mozMatchesSelector)
      return 'mozMatchesSelector';
    else if (elem.msMatchesSelector)
      return 'msMatchesSelector';
    else if (elem.oMatchesSelector)
      return 'oMatchesSelector';
  })();
  var RuntimeComponentFactory = (function() {
    function RuntimeComponentFactory() {}
    RuntimeComponentFactory.prototype.getContainer = function() {
      return document.createElement('div');
    };
    RuntimeComponentFactory.prototype.getFloatRightLinkHolder = function() {
      var el = document.createElement('div');
      el.style = el.style || {};
      el.style.cssFloat = 'right';
      el.style.marginLeft = '10px';
      return el;
    };
    RuntimeComponentFactory.prototype.getModal = function() {
      var el = document.createElement('div');
      el.style.backgroundColor = 'white';
      el.style.border = '1px solid black';
      el.style.boxShadow = '3px 3px black';
      el.style.position = 'absolute';
      el.style.zIndex = '10';
      el.style.display = 'none';
      return el;
    };
    RuntimeComponentFactory.prototype.getGridContainer = function() {
      var el = document.createElement('div');
      return el;
    };
    RuntimeComponentFactory.prototype.getGridRow = function() {
      var el = document.createElement('div');
      el.className = 'row';
      return el;
    };
    RuntimeComponentFactory.prototype.getGridColumn = function() {
      var el = document.createElement('div');
      return el;
    };
    RuntimeComponentFactory.prototype.setGridColumnSize = function(el, size) {};
    RuntimeComponentFactory.prototype.getLink = function(text) {
      var el = document.createElement('a');
      el.setAttribute('href', '#');
      el.appendChild(document.createTextNode(text));
      return el;
    };
    RuntimeComponentFactory.prototype.disableHeader = function(header) {
      header.style.color = '#ccc';
    };
    RuntimeComponentFactory.prototype.disableLabel = function(label) {
      label.style.color = '#ccc';
    };
    RuntimeComponentFactory.prototype.enableHeader = function(header) {
      header.style.color = '';
    };
    RuntimeComponentFactory.prototype.enableLabel = function(label) {
      label.style.color = '';
    };
    RuntimeComponentFactory.prototype.getFormInputLabel = function(text) {
      var el = document.createElement('label');
      el.appendChild(document.createTextNode(text));
      return el;
    };
    RuntimeComponentFactory.prototype.getCheckboxLabel = function(text) {
      var el = this.getFormInputLabel(text);
      el.style.fontWeight = 'normal';
      return el;
    };
    RuntimeComponentFactory.prototype.getHeader = function(text) {
      var el = document.createElement('h3');
      if (typeof text === "string") {
        el.textContent = text;
      } else {
        el.appendChild(text);
      }
      return el;
    };
    RuntimeComponentFactory.prototype.getCheckbox = function() {
      var el = this.getFormInputField('checkbox');
      el.style.display = 'inline-block';
      el.style.width = 'auto';
      return el;
    };
    RuntimeComponentFactory.prototype.getMultiCheckboxHolder = function(controls, label, description) {
      var el = document.createElement('div');
      if (label) {
        label.style.display = 'block';
        el.appendChild(label);
      }
      for (var i in controls) {
        if (!controls.hasOwnProperty(i))
          continue;
        controls[i].style.display = 'inline-block';
        controls[i].style.marginRight = '20px';
        el.appendChild(controls[i]);
      }
      if (description)
        el.appendChild(description);
      return el;
    };
    RuntimeComponentFactory.prototype.getSelectInput = function(options) {
      var select = document.createElement('select');
      if (options) {
        this.setSelectOptions(select, options);
      }
      return select;
    };
    RuntimeComponentFactory.prototype.getSwitcher = function(options) {
      var switcher = this.getSelectInput(options);
      switcher.style.backgroundColor = 'transparent';
      switcher.style.display = 'inline-block';
      switcher.style.fontStyle = 'italic';
      switcher.style.fontWeight = 'normal';
      switcher.style.height = 'auto';
      switcher.style.marginBottom = '0';
      switcher.style.marginLeft = '5px';
      switcher.style.padding = '0 0 0 3px';
      switcher.style.width = 'auto';
      return switcher;
    };
    RuntimeComponentFactory.prototype.getSwitcherOptions = function(switcher) {
      return switcher.getElementsByTagName('option');
    };
    RuntimeComponentFactory.prototype.setSwitcherOptions = function(switcher, options, titles) {
      this.setSelectOptions(switcher, options, titles);
    };
    RuntimeComponentFactory.prototype.setSelectOptions = function(select, options, titles) {
      if (titles === void 0) {
        titles = null;
      }
      titles = titles || [];
      select.innerHTML = '';
      for (var i = 0; i < options.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', options[i]);
        option.textContent = titles[i] || options[i];
        select.appendChild(option);
      }
    };
    RuntimeComponentFactory.prototype.getTextareaInput = function() {
      var el = document.createElement('textarea');
      el.style = el.style || {};
      el.style.width = '100%';
      el.style.height = '300px';
      el.style.boxSizing = 'border-box';
      return el;
    };
    RuntimeComponentFactory.prototype.getRangeInput = function(min, max, step) {
      var el = this.getFormInputField('range');
      el.setAttribute('min', min);
      el.setAttribute('max', max);
      el.setAttribute('step', step);
      return el;
    };
    RuntimeComponentFactory.prototype.getFormInputField = function(type) {
      var el = document.createElement('input');
      el.setAttribute('type', type);
      return el;
    };
    RuntimeComponentFactory.prototype.afterInputReady = function(input) {};
    RuntimeComponentFactory.prototype.getFormControl = function(label, input, description) {
      var el = document.createElement('div');
      el.className = 'form-control';
      if (label) {
        el.appendChild(label);
      }
      if (input.type === 'checkbox') {
        label.insertBefore(input, label.firstChild);
      } else {
        el.appendChild(input);
      }
      if (description) {
        el.appendChild(description);
      }
      return el;
    };
    RuntimeComponentFactory.prototype.getIndentedPanel = function() {
      var el = document.createElement('div');
      el.style = el.style || {};
      el.style.paddingLeft = '10px';
      el.style.marginLeft = '10px';
      el.style.borderLeft = '1px solid #ccc';
      return el;
    };
    RuntimeComponentFactory.prototype.getChildEditorHolder = function() {
      return document.createElement('div');
    };
    RuntimeComponentFactory.prototype.getDescription = function(text) {
      var el = document.createElement('p');
      el.innerHTML = text;
      return el;
    };
    RuntimeComponentFactory.prototype.getCheckboxDescription = function(text) {
      return this.getDescription(text);
    };
    RuntimeComponentFactory.prototype.getFormInputDescription = function(text) {
      return this.getDescription(text);
    };
    RuntimeComponentFactory.prototype.getHeaderButtonHolder = function() {
      return this.getButtonHolder();
    };
    RuntimeComponentFactory.prototype.getButtonHolder = function() {
      return document.createElement('div');
    };
    RuntimeComponentFactory.prototype.getButton = function(text, icon, title) {
      var el = document.createElement('button');
      el.type = 'button';
      this.setButtonText(el, text, icon, title);
      return el;
    };
    RuntimeComponentFactory.prototype.setButtonText = function(button, text, icon, title) {
      button.innerHTML = '';
      if (icon) {
        button.appendChild(icon);
        button.innerHTML += ' ';
      }
      button.appendChild(document.createTextNode(text));
      if (title) {
        button.setAttribute('title', title);
      }
    };
    RuntimeComponentFactory.prototype.getTable = function() {
      return document.createElement('table');
    };
    RuntimeComponentFactory.prototype.getTableRow = function() {
      return document.createElement('tr');
    };
    RuntimeComponentFactory.prototype.getTableHead = function() {
      return document.createElement('thead');
    };
    RuntimeComponentFactory.prototype.getTableBody = function() {
      return document.createElement('tbody');
    };
    RuntimeComponentFactory.prototype.getTableHeaderCell = function(text) {
      var el = document.createElement('th');
      el.textContent = text;
      return el;
    };
    RuntimeComponentFactory.prototype.getTableCell = function() {
      var el = document.createElement('td');
      return el;
    };
    RuntimeComponentFactory.prototype.getErrorMessage = function(text) {
      var el = document.createElement('p');
      el.style = el.style || {};
      el.style.color = 'red';
      el.appendChild(document.createTextNode(text));
      return el;
    };
    RuntimeComponentFactory.prototype.addInputError = function(input, text) {};
    RuntimeComponentFactory.prototype.removeInputError = function(input) {};
    RuntimeComponentFactory.prototype.addTableRowError = function(row) {};
    RuntimeComponentFactory.prototype.removeTableRowError = function(row) {};
    RuntimeComponentFactory.prototype.getTabHolder = function() {
      var el = document.createElement('div');
      el.innerHTML = "<div style='float: left; width: 130px;' class='tabs'></div>\n            <div class='content' style='margin-left: 130px;'></div>\n            <div style='clear:both;'></div>";
      return el;
    };
    RuntimeComponentFactory.prototype.applyStyles = function(el, styles) {
      el.style = el.style || {};
      for (var i in styles) {
        if (!styles.hasOwnProperty(i))
          continue;
        el.style[i] = styles[i];
      }
    };
    RuntimeComponentFactory.prototype.closest = function(elem, selector) {
      while (elem && elem !== document) {
        if (matchKey) {
          if (elem[matchKey](selector)) {
            return elem;
          } else {
            elem = elem.parentNode;
          }
        } else {
          return false;
        }
      }
      return false;
    };
    RuntimeComponentFactory.prototype.getTab = function(span) {
      var el = document.createElement('div');
      el.appendChild(span);
      el.style = el.style || {};
      this.applyStyles(el, {
        border: '1px solid #ccc',
        borderWidth: '1px 0 1px 1px',
        textAlign: 'center',
        lineHeight: '30px',
        borderRadius: '5px',
        borderBottomRightRadius: '0',
        borderTopRightRadius: '0',
        fontWeight: 'bold',
        cursor: 'pointer'
      });
      return el;
    };
    RuntimeComponentFactory.prototype.getTabContentHolder = function(tab_holder) {
      return tab_holder.children[1];
    };
    RuntimeComponentFactory.prototype.getTabContent = function() {
      return this.getIndentedPanel();
    };
    RuntimeComponentFactory.prototype.markTabActive = function(tab) {
      this.applyStyles(tab, {
        opacity: '1',
        background: 'white'
      });
    };
    RuntimeComponentFactory.prototype.markTabInactive = function(tab) {
      this.applyStyles(tab, {
        opacity: '0.5',
        background: ''
      });
    };
    RuntimeComponentFactory.prototype.addTab = function(holder, tab) {
      holder.children[0].appendChild(tab);
    };
    RuntimeComponentFactory.prototype.getBlockLink = function() {
      var link = document.createElement('a');
      link.style.display = 'block';
      return link;
    };
    RuntimeComponentFactory.prototype.getBlockLinkHolder = function() {
      var el = document.createElement('div');
      return el;
    };
    RuntimeComponentFactory.prototype.getLinksHolder = function() {
      var el = document.createElement('div');
      return el;
    };
    RuntimeComponentFactory.prototype.createMediaLink = function(holder, link, media) {
      holder.appendChild(link);
      media.style.width = '100%';
      holder.appendChild(media);
    };
    RuntimeComponentFactory.prototype.createImageLink = function(holder, link, image) {
      holder.appendChild(link);
      link.appendChild(image);
    };
    RuntimeComponentFactory = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], RuntimeComponentFactory);
    return RuntimeComponentFactory;
  })();
  exports.RuntimeComponentFactory = RuntimeComponentFactory;
  return module.exports;
});

System.registerDynamic("ng2-runtime", ["./src/rt.component", "./src/rt.component.factory"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var rt_component_1 = $__require('./src/rt.component');
  var rt_component_factory_1 = $__require('./src/rt.component.factory');
  __export($__require('./src/rt.component'));
  __export($__require('./src/rt.component.factory'));
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = {
    providers: [rt_component_factory_1.RuntimeComponentFactory],
    directives: [rt_component_1.RuntimeComponent]
  };
  return module.exports;
});
