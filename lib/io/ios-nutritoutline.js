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

var IoIosNutritoutline = function (_React$Component) {
    _inherits(IoIosNutritoutline, _React$Component);

    function IoIosNutritoutline() {
        _classCallCheck(this, IoIosNutritoutline);

        return _possibleConstructorReturn(this, (IoIosNutritoutline.__proto__ || Object.getPrototypeOf(IoIosNutritoutline)).apply(this, arguments));
    }

    _createClass(IoIosNutritoutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28 18.3c0.4 0.5 0.8 1.1 0.8 1.8 0 0.8-0.4 1.5-1.1 2s-3.9 2.9-8.2 6l-3-2.4c-0.2-0.2-0.3-0.2-0.5-0.2-0.1 0-0.1 0-0.2 0-0.2 0.2-0.2 0.5 0.1 0.8l2.2 2.8-9 6.5c-0.4 0.3-1 0.7-1.6 0.7-1.4 0-2.5-1.1-2.5-2.5 0-0.6 0.1-1.1 0.3-1.5 0.2-0.1 1.3-1.9 2.9-4.4l1.6 1.3c0.2 0.2 0.4 0.2 0.5 0.2 0.1 0 0.3 0 0.3-0.1 0.2-0.2 0.1-0.5-0.1-0.8l-1.5-1.8c2.1-3.3 4.7-7.5 6.6-10.4l2.8 2.3c0.1 0.2 0.3 0.2 0.4 0.2 0.1 0 0.2 0 0.3-0.1 0.1-0.2 0.1-0.4-0.1-0.7l-2.6-3.2c0.9-1.4 1.5-2.2 1.5-2.2 0.5-0.8 1.2-1.3 2.1-1.3 0.7 0 1.4 0.3 1.9 0.8l6.1 6.2z m-1 2.8c0.3-0.2 0.5-0.6 0.5-1 0-0.3-0.2-0.7-0.4-1l-0.4-0.3v-0.1l-5.8-5.7c-0.2-0.3-0.6-0.4-0.9-0.4-0.5 0-0.8 0.2-1 0.6l-0.4 0.6c-0.2 0.3-0.4 0.6-0.6 1l1.9 2.3 0.1 0.1c0.6 0.8 0.6 1.7 0 2.3l-0.2 0.2c-0.3 0.2-0.6 0.4-1 0.4s-0.8-0.2-1.2-0.5v-0.1h-0.1l-1.6-1.4-1.9 3.1-3.5 5.4 1 1.1c0.6 0.8 0.6 1.8 0 2.5-0.3 0.3-0.7 0.4-1.2 0.4-0.4 0-0.9-0.1-1.2-0.4l-0.6-0.4c-0.2 0.4-0.4 0.7-0.6 1-1 1.5-1.3 2-1.4 2.2-0.1 0.3-0.2 0.5-0.2 0.7 0 0.8 0.6 1.3 1.3 1.3 0.2 0 0.4-0.2 0.8-0.4l7.9-5.8-1.4-1.7h-0.1c-0.6-0.8-0.6-1.8 0-2.4 0.4-0.3 0.8-0.5 1.2-0.5s0.9 0.2 1.3 0.5h0l2.2 1.9c3.9-2.9 7.3-5.4 7.5-5.5z m7.4-12.1l0.6 1.1-0.4 0.2-8 4.7-1.4-1.3 5.6-9.6 0.1-0.3 1.1 0.6-0.2 0.3-4.9 8.7 7.1-4.2z' })
                )
            );
        }
    }]);

    return IoIosNutritoutline;
}(React.Component);

exports.default = IoIosNutritoutline;
module.exports = exports['default'];