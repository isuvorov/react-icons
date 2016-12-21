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

var MdPhonelinkSetup = function (_React$Component) {
    _inherits(MdPhonelinkSetup, _React$Component);

    function MdPhonelinkSetup() {
        _classCallCheck(this, MdPhonelinkSetup);

        return _possibleConstructorReturn(this, (MdPhonelinkSetup.__proto__ || Object.getPrototypeOf(MdPhonelinkSetup)).apply(this, arguments));
    }

    _createClass(MdPhonelinkSetup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 1.6c1.8 0 3.4 1.6 3.4 3.4v30c0 1.8-1.6 3.4-3.4 3.4h-16.6c-1.8 0-3.4-1.6-3.4-3.4v-5h3.4v3.4h16.6v-26.8h-16.6v3.4h-3.4v-5c0-1.8 1.6-3.4 3.4-3.4h16.6z m-18.2 21.8c1.8 0 3.2-1.6 3.2-3.4s-1.4-3.4-3.2-3.4-3.4 1.6-3.4 3.4 1.6 3.4 3.4 3.4z m6.3-2.5l1.8 1.4c0.1 0.2 0.3 0.4 0.1 0.5l-1.6 2.9c-0.2 0.2-0.3 0.2-0.5 0.2l-2.2-0.9c-0.4 0.3-1 0.7-1.4 0.9l-0.4 2.1c-0.2 0.1-0.3 0.4-0.5 0.4h-3.4c-0.1 0-0.4-0.3-0.3-0.4l-0.3-2.1c-0.5-0.2-1-0.6-1.5-0.9l-2.3 0.7c-0.2 0.2-0.4-0.1-0.6-0.2l-1.6-2.8c0-0.2 0-0.4 0.2-0.7l1.8-1.3v-1.7l-1.8-1.3c-0.2-0.2-0.4-0.4-0.2-0.5l1.6-2.9c0.2-0.2 0.4-0.2 0.6-0.2l2.1 0.9c0.5-0.3 1.1-0.7 1.6-0.9l0.3-2.1c0.1-0.1 0.3-0.4 0.4-0.4h3.4c0.3 0 0.5 0.3 0.5 0.4l0.4 2.1c0.4 0.2 1 0.6 1.4 0.9l2.2-0.7c0.2-0.2 0.3 0.1 0.5 0.2l1.6 2.8c0 0.2 0 0.4-0.1 0.5l-1.8 1.3v1.8z' })
                )
            );
        }
    }]);

    return MdPhonelinkSetup;
}(React.Component);

exports.default = MdPhonelinkSetup;
module.exports = exports['default'];