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

var FaRepeat = function (_React$Component) {
    _inherits(FaRepeat, _React$Component);

    function FaRepeat() {
        _classCallCheck(this, FaRepeat);

        return _possibleConstructorReturn(this, (FaRepeat.__proto__ || Object.getPrototypeOf(FaRepeat)).apply(this, arguments));
    }

    _createClass(FaRepeat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.3 5.7v10q0 0.6-0.4 1t-1 0.4h-10q-1 0-1.4-0.9-0.3-0.8 0.4-1.5l3-3.1q-3.3-3-7.8-3-2.3 0-4.4 0.9t-3.6 2.4-2.5 3.7-0.9 4.4 0.9 4.4 2.5 3.7 3.6 2.4 4.4 0.9q2.7 0 5.1-1.1t4-3.3q0.1-0.2 0.5-0.3 0.3 0 0.5 0.2l3.1 3.1q0.2 0.2 0.2 0.5t-0.2 0.5q-2.4 2.9-5.9 4.5t-7.3 1.6q-3.4 0-6.6-1.3t-5.5-3.7-3.6-5.4-1.4-6.7 1.4-6.7 3.6-5.4 5.5-3.7 6.6-1.3q3.3 0 6.4 1.2t5.5 3.5l2.9-2.9q0.6-0.7 1.5-0.3 0.9 0.4 0.9 1.3z' })
                )
            );
        }
    }]);

    return FaRepeat;
}(React.Component);

exports.default = FaRepeat;
module.exports = exports['default'];