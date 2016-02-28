import {Injectable} from 'angular2/core';

var matchKey:string = (function() {
    var elem: any = document.documentElement;

    if (elem.matches) return 'matches';
    else if (elem.webkitMatchesSelector) return 'webkitMatchesSelector';
    else if (elem.mozMatchesSelector) return 'mozMatchesSelector';
    else if (elem.msMatchesSelector) return 'msMatchesSelector';
    else if (elem.oMatchesSelector) return 'oMatchesSelector';
    return null;
})();

@Injectable()
export class RuntimeComponentFactory {
    getContainer() {
        return document.createElement('div');
    }
    getFloatRightLinkHolder() {
        var el: HTMLElement = document.createElement('div');
        el.style = el.style || <CSSStyleDeclaration>{};
        el.style.cssFloat = 'right';
        el.style.marginLeft = '10px';
        return el;
    }
    getModal() {
        var el: HTMLElement = document.createElement('div');
        el.style.backgroundColor = 'white';
        el.style.border = '1px solid black';
        el.style.boxShadow = '3px 3px black';
        el.style.position = 'absolute';
        el.style.zIndex = '10';
        el.style.display = 'none';
        return el;
    }
    getGridContainer() {
        var el: HTMLElement = document.createElement('div');
        return el;
    }
    getGridRow() {
        var el: HTMLElement = document.createElement('div');
        el.className = 'row';
        return el;
    }
    getGridColumn() {
        var el: HTMLElement = document.createElement('div');
        return el;
    }
    setGridColumnSize(el: HTMLElement, size: number) {

    }
    getLink(text: string) {
        var el: HTMLElement = document.createElement('a');
        el.setAttribute('href', '#');
        el.appendChild(document.createTextNode(text));
        return el;
    }
    disableHeader(header: HTMLElement) {
        header.style.color = '#ccc';
    }
    disableLabel(label: HTMLLabelElement) {
        label.style.color = '#ccc';
    }
    enableHeader(header: HTMLElement) {
        header.style.color = '';
    }
    enableLabel(label: HTMLLabelElement) {
        label.style.color = '';
    }
    getFormInputLabel(text: string) {
        var el: HTMLElement = document.createElement('label');
        el.appendChild(document.createTextNode(text));
        return el;
    }
    getCheckboxLabel(text: string) {
        var el: HTMLElement = this.getFormInputLabel(text);
        el.style.fontWeight = 'normal';
        return el;
    }
    getHeader(text: string | HTMLElement) {
        var el: HTMLElement = document.createElement('h3');
        if (typeof text === "string") {
            el.textContent = text;
        }
        else {
            el.appendChild(text);
        }

        return el;
    }
    getCheckbox() {
        var el: HTMLInputElement = this.getFormInputField('checkbox');
        el.style.display = 'inline-block';
        el.style.width = 'auto';
        return el;
    }
    getMultiCheckboxHolder(controls: Array<HTMLInputElement>, label: HTMLLabelElement, description: HTMLElement) {
        var el: HTMLElement = document.createElement('div');

        if (label) {
            label.style.display = 'block';
            el.appendChild(label);
        }

        for (var i in controls) {
            if (!controls.hasOwnProperty(i)) continue;
            controls[i].style.display = 'inline-block';
            controls[i].style.marginRight = '20px';
            el.appendChild(controls[i]);
        }

        if (description) el.appendChild(description);

        return el;
    }
    getSelectInput(options: Array<string>) {
        var select: HTMLSelectElement = document.createElement('select');
        if (options) {
            this.setSelectOptions(select, options);
        }
        return select;
    }
    getSwitcher(options: Array<string>) {
        var switcher: HTMLSelectElement = this.getSelectInput(options);
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
    }
    getSwitcherOptions(switcher: HTMLSelectElement) {
        return switcher.getElementsByTagName('option');
    }
    setSwitcherOptions(switcher: HTMLSelectElement, options: Array<string>, titles: Array<string>) {
        this.setSelectOptions(switcher, options, titles);
    }
    setSelectOptions(select: HTMLSelectElement, options: Array<string>, titles: Array<string> = null) {
        titles = titles || [];
        select.innerHTML = '';
        for (var i = 0; i < options.length; i++) {
            var option = document.createElement('option');
            option.setAttribute('value', options[i]);
            option.textContent = titles[i] || options[i];
            select.appendChild(option);
        }
    }
    getTextareaInput() {
        var el: HTMLTextAreaElement = document.createElement('textarea');
        el.style = el.style || <CSSStyleDeclaration>{};
        el.style.width = '100%';
        el.style.height = '300px';
        el.style.boxSizing = 'border-box';
        return el;
    }
    getRangeInput(min: string, max: string, step: string) {
        var el: HTMLInputElement = this.getFormInputField('range');
        el.setAttribute('min', min);
        el.setAttribute('max', max);
        el.setAttribute('step', step);
        return el;
    }
    getFormInputField(type: string) {
        var el: HTMLInputElement = document.createElement('input');
        el.setAttribute('type', type);
        return el;
    }
    afterInputReady(input: HTMLInputElement) {

    }
    getFormControl(label: HTMLLabelElement, input: HTMLInputElement, description: HTMLElement) {
        var el: HTMLElement = document.createElement('div');
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
    }
    getIndentedPanel() {
        var el: HTMLElement = document.createElement('div');
        el.style = el.style || <CSSStyleDeclaration>{};
        el.style.paddingLeft = '10px';
        el.style.marginLeft = '10px';
        el.style.borderLeft = '1px solid #ccc';
        return el;
    }
    getChildEditorHolder() {
        return document.createElement('div');
    }
    getDescription(text: string) {
        var el: HTMLElement = document.createElement('p');
        el.innerHTML = text;
        return el;
    }
    getCheckboxDescription(text: string) {
        return this.getDescription(text);
    }
    getFormInputDescription(text: string) {
        return this.getDescription(text);
    }
    getHeaderButtonHolder() {
        return this.getButtonHolder();
    }
    getButtonHolder() {
        return document.createElement('div');
    }
    getButton(text: string, icon:HTMLElement, title: string) {
        var el: HTMLButtonElement = document.createElement('button');
        el.type = 'button';
        this.setButtonText(el, text, icon, title);
        return el;
    }
    setButtonText(button: HTMLButtonElement, text: string, icon:HTMLElement, title: string) {
        button.innerHTML = '';
        if (icon) {
            button.appendChild(icon);
            button.innerHTML += ' ';
        }
        button.appendChild(document.createTextNode(text));
        if (title) {
            button.setAttribute('title', title);
        }
    }
    getTable() {
        return document.createElement('table');
    }
    getTableRow() {
        return document.createElement('tr');
    }
    getTableHead() {
        return document.createElement('thead');
    }
    getTableBody() {
        return document.createElement('tbody');
    }
    getTableHeaderCell(text: string) {
        var el: HTMLTableHeaderCellElement = document.createElement('th');
        el.textContent = text;
        return el;
    }
    getTableCell() {
        var el: HTMLTableDataCellElement = document.createElement('td');
        return el;
    }
    getErrorMessage(text:string) {
        var el: HTMLParagraphElement = document.createElement('p');
        el.style = el.style || <CSSStyleDeclaration>{};
        el.style.color = 'red';
        el.appendChild(document.createTextNode(text));
        return el;
    }
    addInputError(input: HTMLInputElement, text: string) {
    }
    removeInputError(input: HTMLInputElement) {
    }
    addTableRowError(row: HTMLTableRowElement) {
    }
    removeTableRowError(row: HTMLTableRowElement) {
    }
    getTabHolder() {
        var el: HTMLDivElement = document.createElement('div');
        el.innerHTML = `<div style='float: left; width: 130px;' class='tabs'></div>
            <div class='content' style='margin-left: 130px;'></div>
            <div style='clear:both;'></div>`;
        return el;
    }
    applyStyles(el: HTMLElement, styles: CSSStyleDeclaration) {
        el.style = el.style || <CSSStyleDeclaration>{};
        for (var i in styles) {
            if (!styles.hasOwnProperty(i)) continue;
            el.style[i] = styles[i];
        }
    }
    closest(elem: any, selector: string): Node | HTMLElement | boolean {
        while (elem && elem !== document) {
            if (matchKey) {
                if (elem[matchKey](selector)) {
                    return elem;
                } else {
                    elem = elem.parentNode;
                }
            }
            else {
                return false;
            }
        }
        return false;
    }
    getTab(span:HTMLSpanElement) {
        var el: HTMLDivElement = document.createElement('div');
        el.appendChild(span);
        el.style = el.style || <CSSStyleDeclaration>{};
        this.applyStyles(el, <CSSStyleDeclaration>{
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
    }
    getTabContentHolder(tab_holder:HTMLElement) {
        return tab_holder.children[1];
    }
    getTabContent() {
        return this.getIndentedPanel();
    }
    markTabActive(tab:HTMLElement) {
        this.applyStyles(tab, <CSSStyleDeclaration>{
            opacity: '1',
            background: 'white'
        });
    }
    markTabInactive(tab:HTMLElement) {
        this.applyStyles(tab, <CSSStyleDeclaration>{
            opacity: '0.5',
            background: ''
        });
    }
    addTab(holder:HTMLElement, tab:HTMLElement) {
        holder.children[0].appendChild(tab);
    }
    getBlockLink() {
        var link: HTMLAnchorElement = document.createElement('a');
        link.style.display = 'block';
        return link;
    }
    getBlockLinkHolder() {
        var el: HTMLDivElement = document.createElement('div');
        return el;
    }
    getLinksHolder() {
        var el: HTMLDivElement = document.createElement('div');
        return el;
    }
    createMediaLink(holder:HTMLElement, link:HTMLElement, media:HTMLElement) {
        holder.appendChild(link);
        media.style.width = '100%';
        holder.appendChild(media);
    }
    createImageLink(holder:HTMLElement, link:HTMLElement, image:HTMLElement) {
        holder.appendChild(link);
        link.appendChild(image);
    }
}