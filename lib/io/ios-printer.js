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

var IoIosPrinter = function (_React$Component) {
    _inherits(IoIosPrinter, _React$Component);

    function IoIosPrinter() {
        _classCallCheck(this, IoIosPrinter);

        return _possibleConstructorReturn(this, (IoIosPrinter.__proto__ || Object.getPrototypeOf(IoIosPrinter)).apply(this, arguments));
    }

    _createClass(IoIosPrinter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm9.8 35v-17.5h20v17.5h-20z m0 0v-17.5h20v17.5h-20z m-1.3-27.5v-2.5h22.5v2.5h-22.5z m25.1 1.3c1.4 0 2.4 1 2.4 2.4v12.3c0 1.3-1 2.7-2.4 2.7h-2.6v-9.9h-22.5v9.9h-2.4c-1.4 0-2.6-1.4-2.6-2.7v-12.3c0-1.4 1.2-2.4 2.6-2.4h27.5z' })
                )
            );
        }
    }]);

    return IoIosPrinter;
}(React.Component);

exports.default = IoIosPrinter;
module.exports = exports['default'];