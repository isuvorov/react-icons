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

var IoIosGameControllerA = function (_React$Component) {
    _inherits(IoIosGameControllerA, _React$Component);

    function IoIosGameControllerA() {
        _classCallCheck(this, IoIosGameControllerA);

        return _possibleConstructorReturn(this, (IoIosGameControllerA.__proto__ || Object.getPrototypeOf(IoIosGameControllerA)).apply(this, arguments));
    }

    _createClass(IoIosGameControllerA, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.3 11.4c4.8 0 8.7 3.5 8.7 8.5s-3.9 8.7-8.7 8.7h-17.6c-4.8 0-8.7-3.7-8.7-8.7s3.9-8.5 8.7-8.5h17.6z m-13.2 9.5v-1.8c0-0.2-0.1-0.3-0.4-0.3h-2.7v-2.8c0-0.2-0.2-0.4-0.4-0.4h-1.7c-0.2 0-0.4 0.2-0.4 0.4v2.7h-2.7c-0.3 0-0.4 0.2-0.4 0.4v1.7c0 0.2 0.1 0.4 0.4 0.4h2.7v2.8c0 0.2 0.2 0.4 0.4 0.4h1.6c0.3 0 0.5-0.2 0.5-0.4v-2.7h2.7c0.3 0 0.4-0.2 0.4-0.4z m9.4 0.6c0.9 0 1.5-0.6 1.5-1.5s-0.6-1.5-1.5-1.5-1.6 0.6-1.6 1.5 0.7 1.5 1.6 1.5z m3.3 3.3c0.8 0 1.5-0.7 1.5-1.5s-0.7-1.5-1.5-1.5-1.5 0.6-1.5 1.5 0.6 1.5 1.5 1.5z m0-6.5c0.8 0 1.5-0.7 1.5-1.6s-0.7-1.5-1.5-1.5-1.5 0.7-1.5 1.5 0.6 1.6 1.5 1.6z m3.3 3.2c0.9 0 1.5-0.6 1.5-1.5s-0.6-1.5-1.5-1.5-1.5 0.6-1.5 1.5 0.7 1.5 1.5 1.5z' })
                )
            );
        }
    }]);

    return IoIosGameControllerA;
}(React.Component);

exports.default = IoIosGameControllerA;
module.exports = exports['default'];