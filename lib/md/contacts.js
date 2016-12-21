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

var MdContacts = function (_React$Component) {
    _inherits(MdContacts, _React$Component);

    function MdContacts() {
        _classCallCheck(this, MdContacts);

        return _possibleConstructorReturn(this, (MdContacts.__proto__ || Object.getPrototypeOf(MdContacts)).apply(this, arguments));
    }

    _createClass(MdContacts, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 28.4v-2.5c0-2.9-5.6-4.3-8.4-4.3s-8.4 1.4-8.4 4.3v2.5h16.8z m-8.4-17.1c-2 0-3.7 1.7-3.7 3.7s1.7 3.8 3.7 3.8 3.8-1.8 3.8-3.8-1.8-3.7-3.8-3.7z m13.4-4.7c1.8 0 3.2 1.6 3.2 3.4v20c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-20c0-1.8 1.4-3.4 3.2-3.4h26.8z m-26.8 33.4v-3.4h26.8v3.4h-26.8z m26.8-40v3.4h-26.8v-3.4h26.8z' })
                )
            );
        }
    }]);

    return MdContacts;
}(React.Component);

exports.default = MdContacts;
module.exports = exports['default'];