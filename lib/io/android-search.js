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

var IoAndroidSearch = function (_React$Component) {
    _inherits(IoAndroidSearch, _React$Component);

    function IoAndroidSearch() {
        _classCallCheck(this, IoAndroidSearch);

        return _possibleConstructorReturn(this, (IoAndroidSearch.__proto__ || Object.getPrototypeOf(IoAndroidSearch)).apply(this, arguments));
    }

    _createClass(IoAndroidSearch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.4 23.8l8.6 8.6-2.6 2.6-8.5-8.6v-1.3l-0.5-0.5c-2 1.7-4.6 2.7-7.3 2.7-6.2 0-11.1-5-11.1-11.1s4.9-11.2 11-11.2c6.2 0 11.1 5 11.1 11.2 0 2.8-1 5.3-2.6 7.2l0.5 0.4h1.4z m-10.3 0c4.3 0 7.7-3.3 7.7-7.6s-3.4-7.8-7.7-7.8-7.7 3.5-7.7 7.8 3.4 7.6 7.7 7.6z' })
                )
            );
        }
    }]);

    return IoAndroidSearch;
}(React.Component);

exports.default = IoAndroidSearch;
module.exports = exports['default'];