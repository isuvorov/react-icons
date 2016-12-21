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

var TiVendorMicrosoft = function (_React$Component) {
    _inherits(TiVendorMicrosoft, _React$Component);

    function TiVendorMicrosoft() {
        _classCallCheck(this, TiVendorMicrosoft);

        return _possibleConstructorReturn(this, (TiVendorMicrosoft.__proto__ || Object.getPrototypeOf(TiVendorMicrosoft)).apply(this, arguments));
    }

    _createClass(TiVendorMicrosoft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.7 20.8c0-0.5-0.4-0.8-0.9-0.8h-10c-0.5 0-0.8 0.3-0.8 0.8v8.4c0 0.5 0.3 0.8 0.8 1l10 1.1c0.5 0 0.9-0.3 0.9-0.6v-9.9z m2.5-0.8c-0.5 0-0.9 0.3-0.9 0.8v9.9c0 0.5 0.4 0.8 0.9 1l15 1.6c0.5 0 0.8-0.3 0.8-0.6v-11.7c0-0.5-0.3-0.8-0.8-0.8l-15-0.2z m-2.5-12.2c0-0.5-0.4-0.8-0.9-0.6l-10 1.1c-0.5 0-0.8 0.4-0.8 0.9v8.3c0 0.5 0.3 0.8 0.8 0.8h10c0.5 0 0.9-0.3 0.9-0.8v-9.7z m2.5-1c-0.5 0-0.9 0.5-0.9 1v9.9c0 0.5 0.4 0.8 0.9 0.8h15c0.5 0 0.8-0.3 0.8-0.8v-11.7c0-0.5-0.3-0.8-0.8-0.7l-15 1.5z' })
                )
            );
        }
    }]);

    return TiVendorMicrosoft;
}(React.Component);

exports.default = TiVendorMicrosoft;
module.exports = exports['default'];