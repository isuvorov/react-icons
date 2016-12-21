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

var IoAndroidPeople = function (_React$Component) {
    _inherits(IoAndroidPeople, _React$Component);

    function IoAndroidPeople() {
        _classCallCheck(this, IoAndroidPeople);

        return _possibleConstructorReturn(this, (IoAndroidPeople.__proto__ || Object.getPrototypeOf(IoAndroidPeople)).apply(this, arguments));
    }

    _createClass(IoAndroidPeople, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.8 18.1c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.9 2.2 4.9 4.7-2.2 4.7-4.9 4.7z m-12.6 0c-2.7 0-4.9-2.1-4.9-4.7s2.2-4.6 4.9-4.6 4.7 2.1 4.7 4.6-2.1 4.7-4.7 4.7z m0 3.5c3.7 0 11.3 1.8 11.3 5.4v4.3h-22.5v-4.3c0-3.6 7.4-5.4 11.2-5.4z m12.6 0.8c3.8 0 11.2 1 11.2 4.6v4.3h-10v-4.3c0-2.3-0.7-3.2-2.5-4.5 0.5-0.1 0.9-0.1 1.3-0.1z' })
                )
            );
        }
    }]);

    return IoAndroidPeople;
}(React.Component);

exports.default = IoAndroidPeople;
module.exports = exports['default'];