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

var IoIosArrowThinUp = function (_React$Component) {
    _inherits(IoIosArrowThinUp, _React$Component);

    function IoIosArrowThinUp() {
        _classCallCheck(this, IoIosArrowThinUp);

        return _possibleConstructorReturn(this, (IoIosArrowThinUp.__proto__ || Object.getPrototypeOf(IoIosArrowThinUp)).apply(this, arguments));
    }

    _createClass(IoIosArrowThinUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.3 14.8c-0.2 0.3-0.7 0.3-0.9 0l-5.8-5.2v22.3c0 0.3-0.3 0.6-0.6 0.6s-0.6-0.3-0.6-0.6v-22.3l-5.8 5.2c-0.2 0.3-0.7 0.3-0.9 0s-0.3-0.7 0-0.9c0 0 6.8-6.2 6.8-6.2s0.3-0.2 0.5-0.2 0.4 0.1 0.5 0.2 6.8 6.2 6.8 6.2c0.2 0.2 0.2 0.3 0.2 0.5s0 0.3-0.2 0.4z' })
                )
            );
        }
    }]);

    return IoIosArrowThinUp;
}(React.Component);

exports.default = IoIosArrowThinUp;
module.exports = exports['default'];