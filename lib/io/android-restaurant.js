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

var IoAndroidRestaurant = function (_React$Component) {
    _inherits(IoAndroidRestaurant, _React$Component);

    function IoAndroidRestaurant() {
        _classCallCheck(this, IoAndroidRestaurant);

        return _possibleConstructorReturn(this, (IoAndroidRestaurant.__proto__ || Object.getPrototypeOf(IoAndroidRestaurant)).apply(this, arguments));
    }

    _createClass(IoAndroidRestaurant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.1 21.9l-7.1-7c-2.7-2.6-2.7-6.7 0-9.3l11.9 11.6z m11.5-3l-2.6 2.4 11.8 11.4-2.4 2.3-11.7-11.4-11.7 11.4-2.4-2.3s12.8-12.5 16.5-16.2c-1.1-2.5-0.3-6 2.4-8.7 3.2-3.1 7.9-3.8 10.4-1.3 2.5 2.4 1.8 6.9-1.4 10.1-2.6 2.6-6.2 3.5-8.9 2.3z' })
                )
            );
        }
    }]);

    return IoAndroidRestaurant;
}(React.Component);

exports.default = IoAndroidRestaurant;
module.exports = exports['default'];