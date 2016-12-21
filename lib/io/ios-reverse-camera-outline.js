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

var IoIosReverseCameraOutline = function (_React$Component) {
    _inherits(IoIosReverseCameraOutline, _React$Component);

    function IoIosReverseCameraOutline() {
        _classCallCheck(this, IoIosReverseCameraOutline);

        return _possibleConstructorReturn(this, (IoIosReverseCameraOutline.__proto__ || Object.getPrototypeOf(IoIosReverseCameraOutline)).apply(this, arguments));
    }

    _createClass(IoIosReverseCameraOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.6 24.9l0.2-0.1 0.8 0.9-0.1 0.2c-1.3 1.1-2.9 1.6-4.5 1.6-3.5 0-6.4-2.8-6.8-6.1h-2.3l2.9-3.9 3.1 3.9h-2.4c0.3 2.6 2.7 4.9 5.5 4.9 1.3 0 2.6-0.5 3.6-1.4z m1.1-9.4c1.2 1.1 1.9 2.9 2.1 4.5h2.3l-2.9 4-3.1-4h2.4c-0.3-2.7-2.7-5-5.5-5-1.3 0-2.6 0.5-3.6 1.3l-0.1 0.2-0.9-1 0.1-0.1c1.3-1.1 2.9-1.7 4.5-1.7 1.7 0 3.4 0.7 4.7 1.8z m8-3c1.4 0 2.3 1.1 2.3 2.4v13.8c0 1.3-0.9 2.6-2.3 2.6h-25c-1.4 0-2.7-1.3-2.7-2.6v-13.8c0-1.3 1.3-2.4 2.7-2.4h1v-1.2h2.6v1.2h1c2.5-2.8 3.4-3.7 4.3-3.7h6.9c1 0 1.8 0.9 4.3 3.7h4.9z m1.1 16.2v-13.8c0-0.7-0.4-1.1-1.1-1.1h-5.4s-0.3-0.1-0.4-0.3-0.5-0.6-0.7-0.8c-1-1.1-1.7-1.9-2.1-2.4-0.4-0.4-0.6-0.3-0.6-0.3h-6.9s0 0-0.4 0.3c-0.5 0.4-1.2 1.1-2.1 2.1-0.2 0.3-0.6 0.9-0.8 1.1s-0.3 0.3-0.5 0.3h-5.1c-0.7 0-1.4 0.5-1.4 1.1v13.8c0 0.7 0.7 1.3 1.4 1.3h25c0.6 0 1.1-0.6 1.1-1.3z' })
                )
            );
        }
    }]);

    return IoIosReverseCameraOutline;
}(React.Component);

exports.default = IoIosReverseCameraOutline;
module.exports = exports['default'];