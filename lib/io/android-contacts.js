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

var IoAndroidContacts = function (_React$Component) {
    _inherits(IoAndroidContacts, _React$Component);

    function IoAndroidContacts() {
        _classCallCheck(this, IoAndroidContacts);

        return _possibleConstructorReturn(this, (IoAndroidContacts.__proto__ || Object.getPrototypeOf(IoAndroidContacts)).apply(this, arguments));
    }

    _createClass(IoAndroidContacts, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.2 26.9c3.6 1.1 5.9 4.8 6.8 8.1h-23c0.9-3.3 3.1-7 6.8-8.1 1.4 0.8 3 1.2 4.7 1.2s3.3-0.4 4.7-1.2z m-4.7-17.5c4.5 0 8.3 3.7 8.3 8.3s-3.8 8.2-8.3 8.2-8.3-3.7-8.3-8.2 3.8-8.3 8.3-8.3z m0 14.6c2.6 0 4.8-1.8 5.8-4h-11.6c0.9 2.2 3.1 4 5.8 4z m11.2 6c-1-1.6-2.6-3.4-4.7-4.1 0.9-0.7 1.7-1.8 2.2-2.8 1.1 0.4 2.1 0.7 3.3 0.7 1.7 0 3.3-0.5 4.7-1.3 3.7 1.1 5.9 4.2 6.8 7.5h-12.3z m-1.2-14.4c-0.6-2.9-2.4-5.4-4.9-6.8 1.4-2.2 4-3.8 6.9-3.8 4.5 0 8.3 3.8 8.3 8.3s-3.8 8.3-8.3 8.3c-0.8 0-1.7-0.2-2.5-0.4 0.2-0.7 0.5-1.3 0.6-2 0.6 0.3 1.2 0.3 1.9 0.3 2.7 0 4.9-1.7 5.8-3.9h-7.8z' })
                )
            );
        }
    }]);

    return IoAndroidContacts;
}(React.Component);

exports.default = IoAndroidContacts;
module.exports = exports['default'];