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

var IoAndroidWatch = function (_React$Component) {
    _inherits(IoAndroidWatch, _React$Component);

    function IoAndroidWatch() {
        _classCallCheck(this, IoAndroidWatch);

        return _possibleConstructorReturn(this, (IoAndroidWatch.__proto__ || Object.getPrototypeOf(IoAndroidWatch)).apply(this, arguments));
    }

    _createClass(IoAndroidWatch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 20c0 4-1.9 7.5-4.8 9.8l-1.4 9h-12.5l-1.5-9c-2.9-2.3-4.8-5.8-4.8-9.8s1.9-7.5 4.8-9.8l1.5-8.9h12.5l1.4 8.9c2.9 2.3 4.8 5.8 4.8 9.8z m-21.9 0c0 5.2 4.2 9.4 9.4 9.4s9.4-4.2 9.4-9.4-4.2-9.4-9.4-9.4-9.4 4.2-9.4 9.4z' })
                )
            );
        }
    }]);

    return IoAndroidWatch;
}(React.Component);

exports.default = IoAndroidWatch;
module.exports = exports['default'];