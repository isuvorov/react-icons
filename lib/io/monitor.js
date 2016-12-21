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

var IoMonitor = function (_React$Component) {
    _inherits(IoMonitor, _React$Component);

    function IoMonitor() {
        _classCallCheck(this, IoMonitor);

        return _possibleConstructorReturn(this, (IoMonitor.__proto__ || Object.getPrototypeOf(IoMonitor)).apply(this, arguments));
    }

    _createClass(IoMonitor, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.1 5c0.5 0 0.9 0.4 0.9 0.9v20.7c0 0.5-0.4 0.9-0.9 0.9h-33.2c-0.5 0-0.9-0.4-0.9-0.9v-20.7c0-0.5 0.4-0.9 0.9-0.9h33.2z m-1.6 20v-17.5h-30v17.5h30z m-11.4 10h-7.2c-2.2 0-3.3-0.2-2.3-0.9s2.3-1.3 2.3-1.8c0-0.3 0.1-3.6 0.1-3.6h7s0.1 3.3 0.1 3.6c0 0.5 1.4 1.1 2.3 1.8s-0.1 0.9-2.3 0.9z' })
                )
            );
        }
    }]);

    return IoMonitor;
}(React.Component);

exports.default = IoMonitor;
module.exports = exports['default'];