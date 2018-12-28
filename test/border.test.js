var test = require('tape');
var Border = require('../public/assets/js/classes/Border');

var document = {
  createElement: (type) => {
    return {
      type: type,
      setAttribute: function (attribute, className) {
        this.className = className;
      }
    }
  }}

test('when init set property containerExist to false', function (t) {
  let myBorder = new Border({});
  t.false(myBorder.containerExist);
  t.end();
});

test('when init, set default document property', function(t) {
  let myBorder = new Border('foo');

  t.equal( myBorder.document, 'foo')
  t.end()
})

test('when init set property DOMElement to an empty string', function (t) {
  let myBorder = new Border({});
  t.equal(myBorder.DOMElement, '');
  t.end();
});

test('createSpan, create span element', function (t) {
  let myBorder = new Border(document);
  let mySpan = myBorder.createSpan();
  t.equal(mySpan.type, 'span');
  t.end();
})

test('createSpan, with className', function (t) {
  let myBorder = new Border(document);
  let mySpan = myBorder.createSpan('maClassCss');
  t.equal(mySpan.className, 'maClassCss');
  t.end();
})


test('appendChild element', function(t) {
  let myBorder = new Border({});
  let myParent = {
    childs: [],
    appendChild: function (element) {
      this.childs.push(element)
    }
  }

  myBorder.addElement(myParent, 'coucou');
  t.equal(myParent.childs[0], 'coucou')
  t.end()
})


test('create container', function(t) {
  let myBorder = new Border(document);
  let myParent = {
    childs: [],
    appendChild: function (element) {
      this.childs.push(element)
    }
  }

  myBorder.createContainer(myParent, '');

  t.true(myBorder.containerExist)
  t.equal(myBorder.DOMElement.type, 'span')

  t.end()
})
