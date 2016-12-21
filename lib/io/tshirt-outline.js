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

var IoTshirtOutline = function (_React$Component) {
    _inherits(IoTshirtOutline, _React$Component);

    function IoTshirtOutline() {
        _classCallCheck(this, IoTshirtOutline);

        return _possibleConstructorReturn(this, (IoTshirtOutline.__proto__ || Object.getPrototypeOf(IoTshirtOutline)).apply(this, arguments));
    }

    _createClass(IoTshirtOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.4 6.7l-8.1 2.4 0.8 2.5 3.1-0.3 3-0.4-0.2 3-1.1 19.9h17.2l-1.1-19.9-0.2-3 3 0.4 3.1 0.3 0.8-2.5-8.1-2.4c-0.5 0.6-1 1.1-1.6 1.5-1.2 0.8-2.7 1.2-4.5 1.2-2.7-0.1-4.6-0.9-6.1-2.7z m11.1-2.9l12.5 3.7-2.5 6.9-5-0.6 1.3 22.5h-22.5l1.2-22.5-5 0.6-2.5-6.9 12.5-3.7c1.1 2.1 2.4 3 5 3.1 2.6 0 3.9-1 5-3.1z' })
                )
            );
        }
    }]);

    return IoTshirtOutline;
}(React.Component);

exports.default = IoTshirtOutline;
module.exports = exports['default'];