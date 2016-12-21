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

var IoIpad = function (_React$Component) {
    _inherits(IoIpad, _React$Component);

    function IoIpad() {
        _classCallCheck(this, IoIpad);

        return _possibleConstructorReturn(this, (IoIpad.__proto__ || Object.getPrototypeOf(IoIpad)).apply(this, arguments));
    }

    _createClass(IoIpad, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.5 5.7c0-0.4 0.3-0.7 0.7-0.7h21.1c0.4 0 0.7 0.3 0.7 0.7v28.6c0 0.4-0.3 0.7-0.7 0.7h-21.1c-0.4 0-0.7-0.3-0.7-0.7v-28.6z m11.3 28.5c0.6 0 1-0.4 1-1.1s-0.5-1.1-1-1.1c-0.7 0-1.1 0.5-1.1 1.1s0.4 1.1 1.1 1.1z m-8.8-24.9v21.5c0 0.3 0.2 0.5 0.5 0.5h16.5c0.2 0 0.5-0.2 0.5-0.5v-21.5c0-0.3-0.3-0.5-0.5-0.5h-16.5c-0.3 0-0.5 0.2-0.5 0.5z' })
                )
            );
        }
    }]);

    return IoIpad;
}(React.Component);

exports.default = IoIpad;
module.exports = exports['default'];