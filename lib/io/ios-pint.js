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

var IoIosPint = function (_React$Component) {
    _inherits(IoIosPint, _React$Component);

    function IoIosPint() {
        _classCallCheck(this, IoIosPint);

        return _possibleConstructorReturn(this, (IoIosPint.__proto__ || Object.getPrototypeOf(IoIosPint)).apply(this, arguments));
    }

    _createClass(IoIosPint, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.5 13.3c0 7.6-2.5 7.9-2.5 14.1 0 3.1 1.3 5.6 1.3 7.8 0 2.1-0.8 2.3-2.5 2.3h-10c-1.8 0-2.5-0.2-2.5-2.3 0-2.2 1.2-4.7 1.2-7.8 0-6.2-2.5-6.5-2.5-14.1 0-1.7 0.1-7 1.5-9.8 0.3-0.7 1-1 2.5-1h9.5c1.5 0 2.2 0.3 2.5 1 1.4 2.8 1.5 8.1 1.5 9.8z m-14.8-9.2c-0.7 1.2-1.1 3.3-1.4 5.9h14.9c-0.3-2.6-0.7-4.7-1.4-5.9 0-0.2 0-0.1-0.1-0.2-0.2-0.1-0.5-0.1-1.2-0.1h-9.5c-0.7 0-1 0-1.2 0.1-0.1 0.1-0.1 0-0.1 0.2z' })
                )
            );
        }
    }]);

    return IoIosPint;
}(React.Component);

exports.default = IoIosPint;
module.exports = exports['default'];