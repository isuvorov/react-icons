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

var TiVendorAndroid = function (_React$Component) {
    _inherits(TiVendorAndroid, _React$Component);

    function TiVendorAndroid() {
        _classCallCheck(this, TiVendorAndroid);

        return _possibleConstructorReturn(this, (TiVendorAndroid.__proto__ || Object.getPrototypeOf(TiVendorAndroid)).apply(this, arguments));
    }

    _createClass(TiVendorAndroid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.8 13.3h16.4c0.1 0 0.1 0 0.1-0.1-0.1-0.9-0.3-1.5-0.6-2.2-0.7-1.5-1.9-2.5-3.2-3.3l-0.7-0.4s0-0.1 0.2-0.1c0.5-0.7 1-1.4 1.5-2.2 0.2-0.2 0.2-0.3 0-0.5s-0.3 0-0.5 0.2l-1.5 2.1s-0.2 0.2-0.2 0c-1.3-0.5-2.6-0.6-4-0.6-1 0-1.8 0.3-2.6 0.6h-0.2l-1.5-2s0-0.1-0.2-0.1c-0.1-0.2-0.3-0.2-0.3 0-0.2 0-0.2 0.1 0 0.3 0 0 0 0.2 0.2 0.2 0.3 0.6 0.8 1.3 1.3 2l0.2 0.1h-0.2c-1 0.5-1.8 1.2-2.5 2-1 1-1.7 2.4-1.8 3.9 0 0.1 0 0.1 0.1 0.1z m11.9-4.6c0.6 0 1.3 0.5 1.3 1.3 0 0.7-0.5 1.3-1.2 1.3-0.6 0-1.3-0.5-1.3-1.3-0.2-0.7 0.5-1.3 1.2-1.3z m-7.2 0c0.7 0 1.3 0.5 1.3 1.3 0 0.7-0.5 1.3-1.1 1.3-0.9 0-1.5-0.6-1.5-1.3s0.6-1.3 1.3-1.3z m-8.2 6.3c-0.8 0-1.6 0.8-1.6 1.7v8.3c0 0.8 0.8 1.7 1.6 1.7s1.7-0.9 1.7-1.7v-8.3c0-0.9-0.8-1.7-1.7-1.7z m23.4 0c-0.9 0-1.7 0.8-1.7 1.7v8.3c0 0.8 0.8 1.7 1.7 1.7s1.6-0.9 1.6-1.7v-8.3c0-0.9-0.8-1.7-1.6-1.7z m-20 13.3c0 0.9 0.8 1.7 1.6 1.7h1.7v5c0 0.8 0.8 1.7 1.7 1.7s1.6-0.9 1.6-1.7v-5h3.4v5c0 0.8 0.8 1.7 1.6 1.7s1.7-0.9 1.7-1.7v-5h1.7c0.8 0 1.6-0.8 1.6-1.7v-13.3h-16.6v13.3z' })
                )
            );
        }
    }]);

    return TiVendorAndroid;
}(React.Component);

exports.default = TiVendorAndroid;
module.exports = exports['default'];