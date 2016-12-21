'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var IoAndroidContact = function (_React$Component) {
    _inherits(IoAndroidContact, _React$Component);

    function IoAndroidContact() {
        _classCallCheck(this, IoAndroidContact);

        return _possibleConstructorReturn(this, (IoAndroidContact.__proto__ || Object.getPrototypeOf(IoAndroidContact)).apply(this, arguments));
    }

    _createClass(IoAndroidContact, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.9 26.4c4.6 1.4 8.1 4.5 9.1 8.6h-30c1-4.1 4.5-7.2 9.1-8.6 1.8 1 3.8 1.6 5.9 1.6s4.1-0.6 5.9-1.6z m-5.9-21.4c5.7 0 10.3 4.6 10.3 10.3s-4.6 10.3-10.3 10.3-10.3-4.6-10.3-10.3 4.6-10.3 10.3-10.3z m0 18c3.3 0 6.1-2 7.2-4.9h-14.4c1.1 2.9 3.9 4.9 7.2 4.9z' })
                )
            );
        }
    }]);

    return IoAndroidContact;
}(React.Component);

exports.default = IoAndroidContact;
module.exports = exports['default'];