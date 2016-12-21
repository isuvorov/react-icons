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

var MdPhonelinkOff = function (_React$Component) {
    _inherits(MdPhonelinkOff, _React$Component);

    function MdPhonelinkOff() {
        _classCallCheck(this, MdPhonelinkOff);

        return _possibleConstructorReturn(this, (MdPhonelinkOff.__proto__ || Object.getPrototypeOf(MdPhonelinkOff)).apply(this, arguments));
    }

    _createClass(MdPhonelinkOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.4 13.4c0.9 0 1.6 0.7 1.6 1.6v16.6c0 1-0.7 1.8-1.6 1.8h-0.4l-5-5h3.6v-11.8h-6.6v8.7l-3.4-3.3v-7c0-0.9 0.8-1.6 1.8-1.6h10z m-31.8-2.9v17.9h17.9z m-3.4-7.8c10.8 10.8 21.6 21.7 32.3 32.5l-2.1 2.1-3.9-3.9h-29.5v-5h3.4v-18.4c0-0.8 0.3-1.6 0.7-2.1l-3-3.1z m33.4 7.3h-21.9l-3.4-3.4h25.3v3.4z' })
                )
            );
        }
    }]);

    return MdPhonelinkOff;
}(React.Component);

exports.default = MdPhonelinkOff;
module.exports = exports['default'];