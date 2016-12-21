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

var IoCalculator = function (_React$Component) {
    _inherits(IoCalculator, _React$Component);

    function IoCalculator() {
        _classCallCheck(this, IoCalculator);

        return _possibleConstructorReturn(this, (IoCalculator.__proto__ || Object.getPrototypeOf(IoCalculator)).apply(this, arguments));
    }

    _createClass(IoCalculator, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.3 2.5c0.7 0 1.2 0.5 1.2 1.3v32.5c0 0.7-0.5 1.2-1.2 1.2h-22.5c-0.8 0-1.3-0.5-1.3-1.2v-32.5c0-0.8 0.5-1.3 1.3-1.3h22.5z m-20 13.8v2.5h2.5v-2.5h-2.5z m0 5v2.5h2.5v-2.5h-2.5z m0 5v2.5h2.5v-2.5h-2.5z m7.5 7.5v-2.5h-7.5v2.5h7.5z m0-5v-2.5h-2.5v2.5h2.5z m0-5v-2.5h-2.5v2.5h2.5z m0-5v-2.5h-2.5v2.5h2.5z m5 15v-2.5h-2.5v2.5h2.5z m0-5v-2.5h-2.5v2.5h2.5z m0-5v-2.5h-2.5v2.5h2.5z m0-5v-2.5h-2.5v2.5h2.5z m5 15v-7.5h-2.5v7.5h2.5z m0-10v-2.5h-2.5v2.5h2.5z m0-5v-2.5h-2.5v2.5h2.5z m0-6.3v-6.2h-17.5v6.2h17.5z' })
                )
            );
        }
    }]);

    return IoCalculator;
}(React.Component);

exports.default = IoCalculator;
module.exports = exports['default'];