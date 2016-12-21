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

var IoAndroidHappy = function (_React$Component) {
    _inherits(IoAndroidHappy, _React$Component);

    function IoAndroidHappy() {
        _classCallCheck(this, IoAndroidHappy);

        return _possibleConstructorReturn(this, (IoAndroidHappy.__proto__ || Object.getPrototypeOf(IoAndroidHappy)).apply(this, arguments));
    }

    _createClass(IoAndroidHappy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c8.9 0 16.2 7.3 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.4-16.3-16.3 7.3-16.2 16.3-16.2z m0 29.2c7.1 0 12.9-5.8 12.9-13s-5.8-13-12.9-13-13 5.8-13 13 5.8 13 13 13z m5.7-14.6c-1.5 0-2.5-1.1-2.5-2.5s1-2.4 2.5-2.4 2.4 1 2.4 2.4-1 2.5-2.4 2.5z m-11.5 0c-1.4 0-2.4-1.1-2.4-2.5s1-2.4 2.4-2.4 2.5 1 2.5 2.4-1 2.5-2.5 2.5z m5.8 10.5c-3.9 0-7-2.3-8.3-5.6h16.5c-1.3 3.3-4.4 5.6-8.2 5.6z' })
                )
            );
        }
    }]);

    return IoAndroidHappy;
}(React.Component);

exports.default = IoAndroidHappy;
module.exports = exports['default'];